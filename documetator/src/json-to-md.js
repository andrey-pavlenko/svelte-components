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
    const { moduleName, filePath, componentComment, props, slots } = component;

    _log(`Render component ${moduleName}`);
    const md = [
      filePath ? `<div class="component__source">Source <code>${filePath}</code></div>` : '',
      moduleName ? `<h1 class="component__name">${moduleName.trim()}</h1>` : '',
      componentComment ? `<div class="component__comment">${marked(componentComment)}</div>` : '',
      Array.isArray(props) && props.length > 0 ? renderProps(props) : '',
      Array.isArray(slots) && slots.length > 0 ? renderSlots(slots) : ''
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
        description ? marked(description.replaceAll(/\n{2,}/g, '\n')) : ''
      }</td>`;
      return `<tr>${[name, type, value, description].join('\n')}</tr>`;
    }

    const header = `<h2 class="component-tbl-header">Props</h2>`;
    const tableStart = `<table><tr><th>Prop nane</th><th>Type</th><th>Default value</th><th>Description</th></tr>`;
    const tableEnd = `</table>`;

    const rows = props.map(renderProp).join('\n');
    return header + tableStart + rows + tableEnd;
  }

  function renderSlots(slots) {
    function renderSlot(slot) {
      let { name, slot_props } = slot;
      _log(`Render slot ${name}`);
      name = `<td class="slot__name">${name ?? ''}</td>`;
      let def = `<td class="slot__default">${slot['default'] ? '<code>true</code>' : ''}</td>`;
      slot_props = `<td class="slot__props">${
        slot_props ? `<code>${sanitizeLtGt(slot_props)}</code>` : ''
      }</td>`;
      return `<tr>${[name, def, slot_props].join('\n')}</tr>`;
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
  const md = components.map((c) => renderComponent(c, _log)).join('\n<hr>\n');
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
