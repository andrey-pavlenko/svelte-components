import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
           * Custom CSS class to add to the `c-coloredit__input--number` base class for custom styling purposes
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
export type ColorEditHslaProps = typeof __propDef.props;
export type ColorEditHslaEvents = typeof __propDef.events;
export type ColorEditHslaSlots = typeof __propDef.slots;
/**
 * @order 99
 *
 * Component for editing hsla color value. Used in the `ColorEdit` component.
 *
 * ```tsx
 * <script>
 * let color='#f00';
 * </script>
 * <ColorEditHsla bind:color />
 * ```
 */
export default class ColorEditHsla extends SvelteComponentTyped<ColorEditHslaProps, ColorEditHslaEvents, ColorEditHslaSlots> {
    get focus(): () => void;
}
export {};
