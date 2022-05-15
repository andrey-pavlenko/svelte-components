<script>import { hsvToHex, hexToHsv } from './utils';
import SVPicker from './SVPicker.svelte';
import _debounce from 'lodash.debounce';
let classes = '';
/**
 * Custom CSS class to add to the `c-color-picker` base class for custom styling purposes
 */
export { classes as class };
/**
 * Custom styles will be passed to the `style` attribute
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
/**
 * Color value update debounce interval
 */
export let debounce = 0;
let hvs;
function watchColor(color) {
    let { h, s, v, a = 1 } = hexToHsv(color);
    if (hvs != null && h === 0 && s === 0) {
        h = hvs.h;
    }
    hvs = { h, s, v, a };
}
$: watchColor(color);
let updater;
$: updater = _debounce((c) => {
    color = c;
}, debounce);
let hex, tone, opacity;
$: ((hvs) => {
    hex = hsvToHex(hvs);
    tone = hsvToHex({ h: hvs.h, s: 100, v: 100 });
    opacity = hsvToHex({ h: hvs.h, s: hvs.s, v: hvs.v });
    updater(hex);
})(hvs);
</script>

<!-- 
@component
@order 0

A component for picking a color with transparency. The color value is hexadecimal.

Dependence: `lodash.debounce`

Inspired by:
- [svelte-awesome-color-picker](https://svelte-awesome-color-picker.vercel.app/)
- [svelte-color-picker](https://github.com/efeskucuk/svelte-color-picker)
- [Coloris](https://github.com/mdbassit/Coloris)

```tsx
<script>
  let color='#f00';
</script>
<ColorPicker bind:color />
```

Basic styles are described in the [`color-picker.css`](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-picker.css) file.

**Note!** Specify the height of the `ColorPicker` component using the `class` or `style` attributes.
-->

<div
  class={'c-color-picker' + (classes ? ' ' + classes : '')}
  style="--cp-tone: {tone}; --cp-color-opacity: {opacity}; --cp-color: {hex}; {style}"
>
  <div class="c-color-picker__body">
    <SVPicker bind:s={hvs.s} bind:v={hvs.v} />
    <div class="c-color-picker__sample" />
    <div class="c-color-picker__hue">
      <input type="range" min="0" max="359" step="1" bind:value={hvs.h} />
    </div>
    <div class="c-color-picker__alpha">
      <input type="range" min="0" max="1" step={1 / 255} bind:value={hvs.a} />
    </div>
  </div>
</div>
