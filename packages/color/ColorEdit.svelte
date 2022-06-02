<script>import ColorEditHex from './ColorEditHex.svelte';
import ColorEditRgba from './ColorEditRgba.svelte';
import ColorEditHsla from './ColorEditHsla.svelte';
import { tick } from 'svelte';
let classes = '';
/**
 * Custom CSS class to add to the `c-color-edit` base class for custom styling purposes
 */
export { classes as class };
/**
 * Custom styles will be passed to the style attribute
 */
export let style = '';
/**
 * Color value. **Reactive**.
 *
 * Note! Components only use **hexadecimal** colors e.g. `#000`, `#f1f2f3`.
 *
 * Do not use a non-hexadecimal color value such as `red` or `rgb(128,128,128)`. `rgb()` or `hsl()` colors can be pre-converted to hexadecimal using the `rbgToHex` or `hslToHex` functions see [utils.js](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.js).
 */
export let color = '#000';
const editors = [
    { component: ColorEditHex, labels: ['Hex'] },
    { component: ColorEditRgba, labels: ['R', 'G', 'B', 'A'] },
    { component: ColorEditHsla, labels: ['H', 'S', 'L', 'A'] }
];
let editor = editors[0];
let editorComponent;
async function nextEditor(step) {
    let index = editors.indexOf(editor) + step;
    if (index < 0) {
        index = editors.length - 1;
    }
    else if (index >= editors.length) {
        index = 0;
    }
    editor = editors[index];
    await tick();
    editorComponent?.focus();
}
</script>

<!-- 
@component
@order 10

Component for editing numeric values or a hexadecimal color string.

Contains buttons for switching editing modes: hex, rgba, hsla.


```tsx
<script>
  let color='#f00';
</script>
<ColorEdit bind:color />
```

Basic styles are described in the  <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-edit.css" target="_blank">`color-edit.css`</a> file.
-->

<div class={'c-color-edit' + (classes ? ' ' + classes : '')} style={style || undefined}>
  <div class="c-color-edit__values" style="--ce-columns: {editor.labels.length}">
    <svelte:component this={editor.component} bind:color bind:this={editorComponent} />
    {#each editor.labels as l}
      <span class="c-color-edit__label">{l}</span>
    {/each}
  </div>
  <div class="c-color-edit__buttons">
    <button class="c-color-edit__button--up" on:click={() => nextEditor(-1)} />
    <button class="c-color-edit__button--down" on:click={() => nextEditor(1)} />
  </div>
</div>
