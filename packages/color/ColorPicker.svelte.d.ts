import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    /**
     * Custom CSS class to add to the `c-color-picker` base class for custom styling purposes
     */ class?: string | undefined;
    /**
     * Custom styles will be passed to the `style` attribute
     */ style?: string | undefined;
    /**
     * Color value. **Reactive**.
     *
     * Note! Components only use **hexadecimal** colors e.g. `#000`, `#f1f2f3`.
     *
     * Do not use a non-hexadecimal color value such as `red` or `rgb(128,128,128)`. `rgb()` or `hsl()` colors can be pre-converted to hexadecimal using the `rbgToHex` or `hslToHex` functions see [utils.js](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.js).
     */ color?: string | undefined;
    /**
     * Color value update debounce interval
     */ debounce?: number | undefined;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export type ColorPickerProps = typeof __propDef.props;
export type ColorPickerEvents = typeof __propDef.events;
export type ColorPickerSlots = typeof __propDef.slots;
/**
 * @order 0
 *
 * Component for picking a color with transparency. The color value is hexadecimal.
 *
 * Dependence: `lodash.debounce`
 *
 * Inspired by:
 * - [svelte-awesome-color-picker](https://svelte-awesome-color-picker.vercel.app/)
 * - [svelte-color-picker](https://github.com/efeskucuk/svelte-color-picker)
 * - [Coloris](https://github.com/mdbassit/Coloris)
 *
 * ```tsx
 * <script>
 * let color='#f00';
 * </script>
 * <ColorPicker bind:color />
 * ```
 *
 * Basic styles are described in the <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-picker.css" target="_blank">`color-picker.css`</a> file.
 *
 * **Note!** Specify the height of the `ColorPicker` component using the `class` or `style` attributes.
 */
export default class ColorPicker extends SvelteComponentTyped<
  ColorPickerProps,
  ColorPickerEvents,
  ColorPickerSlots
> {}
export {};
