<script>import { hexToRgb, rgbToHex } from './utils';
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
let r;
let g;
let b;
let a;
function inputColor(color) {
    try {
        const rgb = hexToRgb(color);
        r = rgb.r;
        g = rgb.g;
        b = rgb.b;
        a = rgb.a ?? 1;
    }
    catch (_) {
        r = NaN;
        g = NaN;
        b = NaN;
        a = NaN;
    }
}
$: inputColor(color);
function outputColor(r, g, b, a) {
    if ([r, b, g, a ?? 1].every((num) => Number.isFinite(num))) {
        color = rgbToHex({ r, g, b, a });
    }
}
$: outputColor(r, g, b, a);
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
@order 98

Component for editing rgba color value. Used in the `ColorEdit` component.

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
  max="255"
  step="1"
  value={r}
  on:change={(event) => (r = +event.currentTarget.value)}
/>
<input
  class={'c-coloredit__input--number' + (classes ? ' ' + classes : '')}
  type="number"
  min="0"
  max="255"
  step="1"
  value={g}
  on:change={(event) => (g = +event.currentTarget.value)}
/>
<input
  class={'c-coloredit__input--number' + (classes ? ' ' + classes : '')}
  type="number"
  min="0"
  max="255"
  step="1"
  value={b}
  on:change={(event) => (b = +event.currentTarget.value)}
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
