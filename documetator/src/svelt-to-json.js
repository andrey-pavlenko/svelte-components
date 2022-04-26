import * as fs from 'fs';
import * as fsPromises from 'fs/promises';
import * as path from 'path';
import { sveld } from 'sveld';

/**
 * Generate documentation via sveld from directory into JSON
 *
 * @param {string} dir
 * @param {{ remove: boolean, timeout: number, debug:boolean }} options
 * @returns {Promise<Record<unknown, unknown>>}
 */
export async function svelteToJson(dir, { remove = true, timeout = 30000, debug = false } = {}) {
  const _log = debug
    ? (...args) => console.info(new Date().toLocaleString(), ...args)
    : () => void 0;

  await fsPromises.access(dir, fs.constants.F_OK);
  const packageFile = path.join(dir, './package.json');
  await fsPromises.access(packageFile, fs.constants.F_OK | fs.constants.O_RDONLY);
  _log(`Loading ${packageFile}`);
  const packageJson = JSON.parse(fs.readFileSync(packageFile, { encoding: 'utf-8' }));

  const input = path.join(dir, packageJson.main || packageJson.svelte);
  await fsPromises.access(input, fs.constants.F_OK | fs.constants.O_RDONLY);

  const output = path.join(
    path.relative(process.cwd(), path.dirname(process.argv[1])),
    './API.json'
  );
  if (fs.existsSync(output)) {
    _log(`File ${output} exists. Remove before start sveld`);
    fs.unlinkSync(output);
  }

  const config = {
    input,
    glob: true,
    markdown: false,
    json: true,
    jsonOptions: {
      outFile: output
    },
    types: false
  };

  _log(`Sveld config:\n${JSON.stringify(config, null, 2)}`);

  return new Promise((resolve, reject) => {
    _log('Start sveld');
    sveld(config);

    const timer = setTimeout(() => {
      fs.unwatchFile(output);
      const message = `Timeout ${timeout}, file ${output} still missing`;
      _log(message);
      reject(new Error(message));
    }, timeout);

    fs.watchFile(output, (file) => {
      _log(`File ${output} changed, size ${file.size.toLocaleString()} bytes`);
      if (file.size > 0) {
        try {
          const json = JSON.parse(
            fs.readFileSync(output, {
              encoding: 'utf-8',
              flag: fs.constants.O_RDONLY
            })
          );
          _log(`JSON ready, loaded from file ${output}`);
          resolve(json);
        } catch (e) {
          _log(`Error: ${e.message}`);
          reject(e);
        } finally {
          clearTimeout(timer);
          fs.unwatchFile(output);
          if (remove && fs.existsSync(output)) {
            _log(`Remove result file ${output}`);
            fs.unlinkSync(output);
          }
        }
      }
    });
  });
}
