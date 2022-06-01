<script>import { hexToHsl, hslToHex } from './utils';
let classes = '';
/**
 * Custom CSS class to add to the `c-coloredit__input--number` base class for custom styling purposes
 */
export { classes as class };
/**
 * Color value. **Reactive**.
 *
 * Note! Components only use **hexadecimal** colors e.g. `#000`, `#f1f2f3`.
 */
export let color = '#000';
let h;
let s;
let l;
let a;
function inputColor(color) {
    try {
        const hsl = hexToHsl(color);
        h = hsl.h;
        s = hsl.s;
        l = hsl.l;
        a = hsl.a ?? 1;
    }
    catch (_) {
        h = NaN;
        s = NaN;
        l = NaN;
        a = NaN;
    }
}
$: inputColor(color);
function outputColor(h, s, l, a) {
    if ([h, s, l, a ?? 1].every((num) => Number.isFinite(num))) {
        color = hslToHex({ h, s, l, a });
    }
}
$: outputColor(h, s, l, a);
let input = undefined;
/**
 * Focuses the first input element
 */
export function focus() {
    input?.focus();
}
</script>

<!-- 
@component
@order 99

Component for editing hsla color value. Used in the `ColorEdit` component.

```tsx
<script>
  let color='#f00';
</script>
<ColorEditHsla bind:color />
```
-->

<input
  bind:this={input}
  class={'c-coloredit__input--number' + (classes ? ' ' + classes : '')}
  type="number"
  min="0"
  max="360"
  step="1"
  value={h}
  on:change={(event) => (h = +event.currentTarget.value)}
/>
<input
  class={'c-coloredit__input--number' + (classes ? ' ' + classes : '')}
  type="number"
  min="0"
  max="100"
  step="1"
  value={s}
  on:change={(event) => (s = +event.currentTarget.value)}
/>
<input
  class={'c-coloredit__input--number' + (classes ? ' ' + classes : '')}
  type="number"
  min="0"
  max="100"
  step="1"
  value={l}
  on:change={(event) => (l = +event.currentTarget.value)}
/>
<input
  class={'c-coloredit__input--number' + (classes ? ' ' + classes : '')}
  type="number"
  min="0"
  max="1"
  step="0.01"
  value={a}
  on:change={(event) => (a = +event.currentTarget.value)}
/>
