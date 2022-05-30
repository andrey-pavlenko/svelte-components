<script lang="ts">
  import ColorEditHex from './ColorEditHex.svelte';
  import ColorEditRgba from './ColorEditRgba.svelte';
  import ColorEditHsla from './ColorEditHsla.svelte';
  import { tick } from 'svelte';

  let classes = '';
  export { classes as class };
  export let style = '';
  export let color = '#000';

  const editors = [
    { component: ColorEditHex, labels: ['Hex'] },
    { component: ColorEditRgba, labels: ['R', 'G', 'B', 'A'] },
    { component: ColorEditHsla, labels: ['H', 'S', 'L', 'A'] }
  ];

  let editor = editors[0];
  let editorComponent: ColorEditHex | ColorEditRgba | ColorEditHsla | undefined;

  async function nextEditor(step: number) {
    let index = editors.indexOf(editor) + step;
    if (index < 0) {
      index = editors.length - 1;
    } else if (index >= editors.length) {
      index = 0;
    }
    editor = editors[index];
    await tick();
    editorComponent?.focus();
  }
</script>

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
