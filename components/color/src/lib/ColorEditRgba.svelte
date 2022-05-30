<script lang="ts">
  import { hexToRgb, rgbToHex } from './utils';
  export let color = '#000';

  let r: number;
  let g: number;
  let b: number;
  let a: number;

  function inputColor(color: string) {
    try {
      const rgb = hexToRgb(color);
      r = rgb.r;
      g = rgb.g;
      b = rgb.b;
      a = rgb.a ?? 1;
    } catch (_) {
      r = NaN;
      g = NaN;
      b = NaN;
      a = NaN;
    }
  }

  $: inputColor(color);

  function outputColor(r: number, g: number, b: number, a: number) {
    if ([r, b, g, a ?? 1].every((num) => Number.isFinite(num))) {
      color = rgbToHex({ r, g, b, a });
    }
  }

  $: outputColor(r, g, b, a);

  let input: HTMLInputElement | undefined = undefined;

  export function focus() {
    input?.focus();
  }
</script>

<input
  bind:this={input}
  class="c-coloredit__input--number"
  type="number"
  min="0"
  max="255"
  step="1"
  value={r}
  on:change={(event) => (r = +event.currentTarget.value)}
/>
<input
  class="c-coloredit__input--number"
  type="number"
  min="0"
  max="255"
  step="1"
  value={g}
  on:change={(event) => (g = +event.currentTarget.value)}
/>
<input
  class="c-coloredit__input--number"
  type="number"
  min="0"
  max="255"
  step="1"
  value={b}
  on:change={(event) => (b = +event.currentTarget.value)}
/>
<input
  class="c-coloredit__input--number"
  type="number"
  min="0"
  max="1"
  step="0.01"
  value={a}
  on:change={(event) => (a = +event.currentTarget.value)}
/>
