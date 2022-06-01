<script lang="ts">
  import { isHexValid } from './utils';

  let classes = '';
  /**
   * Custom CSS class to add to the `c-coloredit__input--text` base class for custom styling purposes
   */
  export { classes as class };

  /**
   * Color value. **Reactive**.
   *
   * Note! Components only use **hexadecimal** colors e.g. `#000`, `#f1f2f3`.
   */
  export let color = '#000';

  let hex: string;
  $: hex = isHexValid(color) ? color : '';

  function outputColor(hex: string) {
    if (isHexValid(hex)) {
      color = hex;
    }
  }

  let input: HTMLInputElement | undefined = undefined;

  /**
   * Focuses the input element
   */
  export function focus(): void {
    input?.focus();
  }
</script>

<!-- 
@component
@order 90

Component for editing a hexadecimal color string. Used in the `ColorEdit` component.

```tsx
<script>
  let color='#f00';
</script>
<ColorEditHex bind:color />
```
-->

<input
  bind:this={input}
  class={'c-coloredit__input--text' + (classes ? ' ' + classes : '')}
  type="text"
  value={hex}
  on:input={(event) => outputColor(event.currentTarget.value)}
/>
