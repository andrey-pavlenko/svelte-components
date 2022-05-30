<script lang="ts">
  import ColorPicker from './ColorPicker.svelte';

  let classes = '';
  export { classes as class };
  export let style = '';
  export let color = '#000';
  export let debounce = 0;
  export let openClass = 'open';

  let open = true;
</script>

<!-- click outside https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7 -->
<div
  class={['c-color-input', classes, open ? openClass : ''].filter((s) => !!s).join(' ')}
  style="---cp-color: {color}; {style}"
>
  <div class="c-color-input__frame">
    <div class="c-color-input__sample" />
  </div>
  {#if open}
    <div class="c-color-input__picker">
      <ColorPicker bind:color {debounce} />
    </div>
  {/if}
</div>
