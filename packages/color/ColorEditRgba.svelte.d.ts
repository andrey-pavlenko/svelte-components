import { SvelteComponentTyped } from 'svelte';
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
export type ColorEditRgbaProps = typeof __propDef.props;
export type ColorEditRgbaEvents = typeof __propDef.events;
export type ColorEditRgbaSlots = typeof __propDef.slots;
/**
 * @order 98
 *
 * Component for editing rgba color value. Used in the `ColorEdit` component.
 *
 * ```tsx
 * <script>
 * let color='#f00';
 * </script>
 * <ColorEditHsla bind:color />
 * ```
 */
export default class ColorEditRgba extends SvelteComponentTyped<
  ColorEditRgbaProps,
  ColorEditRgbaEvents,
  ColorEditRgbaSlots
> {
  get focus(): () => void;
}
export {};
