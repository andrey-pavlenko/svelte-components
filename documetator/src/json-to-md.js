import { marked } from 'marked';

/**
 * Generate markdown from svelte components JSON desription
 *
 * @param {Record<string, unknown>} json
 * @param {{debug: boolean}} oprions
 * @returns {string}
 */
export function jsonToMarkdown(json, { debug = false } = {}) {
  const _log = debug
    ? (...args) => console.info(new Date().toLocaleString(), ...args)
    : () => void 0;

  function renderComponent(component) {
    const { moduleName, filePath, componentComment, props, slots, typedefs, moduleExports } =
      component;
    if (Array.isArray(moduleExports)) {
      if (moduleExports.find((exps) => exps.name === moduleName)) {
        console.warn(
          `${filePath} moduleExports includes the module ${moduleName}. It's probably a re-export. Skipping`
        );
        return '';
      }
    }

    _log(`Render component ${moduleName}`);
    const md = [
      filePath ? `<div class="component__source">Source <code>${filePath}</code></div>` : '',
      moduleName ? `<h1 class="component__name">${moduleName.trim()}</h1>` : '',
      componentComment ? `<div class="component__comment">${marked(componentComment)}</div>` : '',
      Array.isArray(typedefs) && typedefs.length > 0 ? renderTypedefs(typedefs) : '',
      Array.isArray(props) && props.length > 0 ? renderProps(props) : '',
      Array.isArray(slots) && slots.length > 0 ? renderSlots(slots) : '',
      Array.isArray(moduleExports) && moduleExports.length > 0
        ? renderModuleExports(moduleExports)
        : ''
    ]
      .filter((s) => !!s)
      .join('\n')
      .replaceAll(/(`{3})([^\n])/g, '$1\n$2');

    return md;
  }

  function renderProps(props) {
    function renderProp(prop) {
      let { name, type, value, reactive, description } = prop;
      _log(`Render prop ${name}`);
      name = `<td class="prop__name">${name ?? ''}</td>`;
      type = `<td class="prop__type">${type ? `<code>${sanitizeLtGt(type)}</code>` : ''}</td>`;
      value = `<td class="prop__value">${value ? `<code>${sanitizeLtGt(value)}</code>` : ''}</td>`;
      description = `<td class="prop__description">${
        description ? marked(description.replaceAll(/\n{2,}/g, '<br />')) : ''
      }</td>`;
      return `<tr>${[name, type, value, description].join('\n')}</tr>`;
    }

    const header = `<h2 class="component-tbl-header">Props</h2>`;
    const tableStart = `<table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr>`;
    const tableEnd = `</table>`;

    const rows = props.map(renderProp).join('\n');
    return header + tableStart + rows + tableEnd;
  }

  function renderTypedefs(typedefs) {
    function renderTypedef(typedef) {
      let { name, type } = typedef;
      name = `<td class="typedef__name">${name ?? ''}</td>`;
      type = type
        ? `<td class="typedef__type">${marked(
            '```\n' + type.replaceAll(/\n{2,}/g, '<br />') + '\n```'
          )}</td>`
        : '<td></td>';
      return `<tr>${[name, type].join('\n')}</tr>`;
    }

    const header = `<h2 class="component-tbl-header">Typedefs</h2>`;
    const tableStart = `<table><tr><th>Name</th><th>Type</th></tr>`;
    const tableEnd = `</table>`;

    const rows = typedefs.map(renderTypedef).join('\n');
    return header + tableStart + rows + tableEnd;
  }

  function renderModuleExports(exports) {
    function renderExport(exp) {
      let { name, type, description } = exp;
      name = `<td class="exports__name">${name ?? ''}</td>`;
      type = type
        ? `<td class="exports__type">${marked(
            '```\n' + type.replaceAll(/\n{2,}/g, '<br />') + '\n```'
          )}</td>`
        : '<td></td>';
      description = `<td class="exports__description">${description ?? ''}</td>`;
      return `<tr>${[name, type, description].join('\n')}</tr>`;
    }

    const header = `<h2 class="component-tbl-header">Module exports</h2>`;
    const tableStart = `<table><tr><th>Name</th><th>Type</th><th>Description</th></tr>`;
    const tableEnd = `</table>`;

    const rows = exports.map(renderExport).join('\n');
    return header + tableStart + rows + tableEnd;
  }

  function renderSlots(slots) {
    function renderSlot(slot) {
      let { name, slot_props, fallback } = slot;
      _log(`Render slot ${name}`);
      name = `<td class="slot__name">${name ?? ''}</td>`;
      let def = `<td class="slot__default">${slot['default'] ? '<code>true</code>' : ''}</td>`;
      slot_props = `<td class="slot__props">${
        slot_props ? `<code>${sanitizeLtGt(slot_props)}</code>` : ''
      }</td>`;
      fallback = fallback
        ? `<tr><th colspan="3">Fallback</th></tr>
<tr><td class="slot__fallback" colspan="3">${marked(
            '```\n' + fallback.replaceAll(/\n{2,}/g, '<br />') + '\n```'
          )}</td></tr>`
        : '';
      return `<tr>${[name, def, slot_props].join('\n')}</tr>${fallback}`;
    }

    const header = `<h2 class="component-tbl-header">Slots</h2>`;
    const tableStart = `<table><tr><th>Slot name</th><th>Default</th><th>Props</th></tr>`;
    const tableEnd = `</table>`;

    const rows = slots.map(renderSlot).join('\n');
    return header + tableStart + rows + tableEnd;
  }

  const components = json.components
    .sort((a, b) => getComponentOrder(a) - getComponentOrder(b))
    .map(rmComponentOrder);
  const md = components
    .map((c) => renderComponent(c, _log))
    .filter((s) => !!s)
    .join('\n<hr>\n');
  return md;
}

function getComponentOrder(component) {
  const match = /@order\s+(\d+)/gi.exec(component.componentComment);
  return match != null ? +match[1] : Number.MAX_SAFE_INTEGER;
}

function rmComponentOrder(component) {
  const { componentComment, ...rest } = component;
  if (componentComment) {
    return {
      componentComment: componentComment.replace(/\n?@order\s+\d+\n?/gi, ''),
      ...rest
    };
  }
  return component;
}

function sanitizeLtGt(html) {
  return html.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
