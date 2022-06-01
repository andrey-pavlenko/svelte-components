import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
           * Custom CSS class to add to the `c-coloredit__input--text` base class for custom styling purposes
           */ class?: string | undefined;
        /**
           * Color value. **Reactive**.
           *
           * Note! Components only use **hexadecimal** colors e.g. `#000`, `#f1f2f3`.
           */ color?: string | undefined;
        focus?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ColorEditHexProps = typeof __propDef.props;
export declare type ColorEditHexEvents = typeof __propDef.events;
export declare type ColorEditHexSlots = typeof __propDef.slots;
/**
 * @order 90
 *
 * Component for editing a hexadecimal color string. Used in the `ColorEdit` component.
 *
 * ```tsx
 * <script>
 * let color='#f00';
 * </script>
 * <ColorEditHex bind:color />
 * ```
 */
export default class ColorEditHex extends SvelteComponentTyped<ColorEditHexProps, ColorEditHexEvents, ColorEditHexSlots> {
    get focus(): () => void;
}
export {};
