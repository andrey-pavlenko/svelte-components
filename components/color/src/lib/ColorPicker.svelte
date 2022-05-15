<script lang="ts">
  import { clamp, hsvToHex, hexToHsv, type HexColor } from './converter';
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
   * Note! Components only use **hexadecimal** colors e.g. `#000`, `#f1f2f3`. Do not use a non-hexadecimal color value such as `red` or `rgb(128,128,128)`.
   */
  export let color = '#000';

  /**
   * Color value update debounce interval
   */
  export let debounce = 0;

  let h: number, s: number, v: number, a: number, x: number, y: number;
  let toning = false;
  let updater: (h: number, x: number, y: number, a: number) => void;

  $: updater = _debounce((h, x, y, a) => {
    color = hsvToHex({ h, s: x, v: 100 - y, a });
  }, debounce);

  function updateHsvaxy(color: HexColor) {
    const hsv = hexToHsv(color);
    if (!toning) {
      h = hsv.h;
    }
    s = hsv.s;
    v = hsv.v;
    a = hsv.a ?? 1;
    x = s;
    y = 100 - v;
  }

  $: updateHsvaxy(color);
  $: updater(h, x, y, a);

  function actionPickTone(node: HTMLElement) {
    function updateXY(event: MouseEvent | TouchEvent) {
      const { pageX, pageY } = event instanceof MouseEvent ? event : event.changedTouches[0];
      const { left, top, width, height } = node.getBoundingClientRect();
      x = clamp((pageX - left - window.scrollX) / width, 0, 1) * 100;
      y = clamp((pageY - top - window.scrollY) / height, 0, 1) * 100;
    }

    function handlePickMove(event: MouseEvent | TouchEvent) {
      updateXY(event);
    }

    function handlePickUp() {
      toning = false;
      document.removeEventListener('mousemove', handlePickMove);
      document.removeEventListener('touchmove', handlePickMove);
      document.removeEventListener('mouseup', handlePickUp);
      document.removeEventListener('touchend', handlePickUp);
      setTimeout(() => {
        document.removeEventListener('click', preventClick, { capture: true });
      }, 0);
    }

    function handlePickDown(event: MouseEvent | TouchEvent) {
      toning = true;
      node.focus();
      document.addEventListener('mousemove', handlePickMove);
      document.addEventListener('touchmove', handlePickMove);
      document.addEventListener('mouseup', handlePickUp);
      document.addEventListener('touchend', handlePickUp);
      document.addEventListener('click', preventClick, { capture: true });
      updateXY(event);
      event.preventDefault();
    }

    function preventClick(event: Event) {
      event.preventDefault();
      event.stopPropagation();
    }

    function handleKeyboardMove(event: KeyboardEvent) {
      const step = 0.05;
      switch (event.code) {
        case 'ArrowUp':
          y = clamp(y - step, 0, 100);
          event.preventDefault();
          break;
        case 'ArrowDown':
          y = clamp(y + step, 0, 100);
          event.preventDefault();
          break;
        case 'ArrowLeft':
          x = clamp(x - step, 0, 100);
          event.preventDefault();
          break;
        case 'ArrowRight':
          x = clamp(x + step, 0, 100);
          event.preventDefault();
          break;
      }
    }

    node.addEventListener('mousedown', handlePickDown);
    node.addEventListener('touchstart', handlePickDown);
    node.addEventListener('keydown', handleKeyboardMove);

    return {
      destroy() {
        handlePickUp();
        node.removeEventListener('mousedown', handlePickDown);
        node.removeEventListener('touchstart', handlePickDown);
        node.removeEventListener('keydown', handleKeyboardMove);
      }
    };
  }
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
  style="--cp-tone: {hsvToHex({
    h,
    s: 100,
    v: 100
  })}; --cp-color-opacity: {hsvToHex({ h, s, v })}; --cp-color: {color}; {style}"
>
  <div class="c-color-picker__body">
    <div class="c-color-picker__tone" tabindex="0" use:actionPickTone>
      <div class="c-color-picker__tone--marker" style="left: {x}%; top: {y}%" />
    </div>
    <div class="c-color-picker__sample" />
    <div class="c-color-picker__hue">
      <input type="range" min="0" max="359" step="1" bind:value={h} />
    </div>
    <div class="c-color-picker__alpha">
      <input type="range" min="0" max="1" step={1 / 255} bind:value={a} />
    </div>
  </div>
</div>
