import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
           * Custom CSS class to add to the `c-color-edit` base class for custom styling purposes
           */ class?: string | undefined;
        /**
           * Custom styles will be passed to the style attribute
           */ style?: string | undefined;
        /**
           * Color value. **Reactive**.
           *
           * Note! Components only use **hexadecimal** colors e.g. `#000`, `#f1f2f3`.
           *
           * Do not use a non-hexadecimal color value such as `red` or `rgb(128,128,128)`. `rgb()` or `hsl()` colors can be pre-converted to hexadecimal using the `rbgToHex` or `hslToHex` functions see [utils.js](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.js).
           */ color?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ColorEditProps = typeof __propDef.props;
export declare type ColorEditEvents = typeof __propDef.events;
export declare type ColorEditSlots = typeof __propDef.slots;
/**
 * @order 10
 *
 * Component for editing numeric values or a hexadecimal color string.
 *
 * Contains buttons for switching editing modes: hex, rgba, hsla.
 *
 *
 * ```tsx
 * <script>
 * let color='#f00';
 * </script>
 * <ColorEdit bind:color />
 * ```
 *
 * Basic styles are described in the  <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-edit.css" target="_blank">`color-edit.css`</a> file.
 */
export default class ColorEdit extends SvelteComponentTyped<ColorEditProps, ColorEditEvents, ColorEditSlots> {
}
export {};
