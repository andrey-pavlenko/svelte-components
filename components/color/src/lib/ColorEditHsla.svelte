<script lang="ts">
  import { hexToHsl, hslToHex } from './utils';
  export let color = '#000';

  let h: number;
  let s: number;
  let l: number;
  let a: number;

  function inputColor(color: string) {
    try {
      const hsl = hexToHsl(color);
      h = hsl.h;
      s = hsl.s;
      l = hsl.l;
      a = hsl.a ?? 1;
    } catch (_) {
      h = NaN;
      s = NaN;
      l = NaN;
      a = NaN;
    }
  }

  $: inputColor(color);

  function outputColor(h: number, s: number, l: number, a: number) {
    if ([h, s, l, a ?? 1].every((num) => Number.isFinite(num))) {
      color = hslToHex({ h, s, l, a });
    }
  }

  $: outputColor(h, s, l, a);

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
  max="360"
  step="1"
  value={h}
  on:change={(event) => (h = +event.currentTarget.value)}
/>
<input
  class="c-coloredit__input--number"
  type="number"
  min="0"
  max="100"
  step="1"
  value={s}
  on:change={(event) => (s = +event.currentTarget.value)}
/>
<input
  class="c-coloredit__input--number"
  type="number"
  min="0"
  max="100"
  step="1"
  value={l}
  on:change={(event) => (l = +event.currentTarget.value)}
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
