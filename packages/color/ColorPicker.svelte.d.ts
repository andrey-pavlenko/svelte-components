import { SvelteComponentTyped } from "svelte";
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
           * Note! Components only use **hexadecimal** colors e.g. `#000`, `#f1f2f3`. Do not use a non-hexadecimal color value such as `red` or `rgb(128,128,128)`.
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
export declare type ColorPickerProps = typeof __propDef.props;
export declare type ColorPickerEvents = typeof __propDef.events;
export declare type ColorPickerSlots = typeof __propDef.slots;
/**
 * @order 0
 *
 * A component for picking a color with transparency. The color value is hexadecimal.
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
 * Basic styles are described in the `color-picker.css` file.
 *
 * Note! Specify the height of the `ColorPicker` component using the `class` or `style` attributes.
 */
export default class ColorPicker extends SvelteComponentTyped<ColorPickerProps, ColorPickerEvents, ColorPickerSlots> {
}
export {};
