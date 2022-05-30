<script lang="ts">
  import { isHexValid } from './utils';
  export let color = '#000';

  let hex: string;
  $: hex = isHexValid(color) ? color : '';

  function outputColor(hex: string) {
    if (isHexValid(hex)) {
      color = hex;
    }
  }

  let input: HTMLInputElement | undefined = undefined;

  export function focus() {
    input?.focus();
  }
</script>

<input
  bind:this={input}
  class="c-coloredit__input--text"
  type="text"
  value={hex}
  on:input={(event) => outputColor(event.currentTarget.value)}
/>
