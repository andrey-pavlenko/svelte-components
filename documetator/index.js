#!/usr/bin/env node

import * as path from 'path';
import * as fs from 'fs';
import { svelteToJson } from './src/svelt-to-json.js';
import { jsonToMarkdown } from './src/json-to-md.js';

async function main() {
  if (!process.argv[2]) {
    console.error(
      `No woking directory specified.\nUsage ${path.basename(process.argv[1])} <working_directory>`
    );
    process.exit(1);
  }
  const dir = process.argv[2];
  const json = await svelteToJson(dir, { remove: false });
  const md = jsonToMarkdown(json);
  fs.writeFileSync(path.resolve(dir, './API.md'), md, { encoding: 'utf-8' });
}

main();
