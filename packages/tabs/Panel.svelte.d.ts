import { SvelteComponentTyped } from 'svelte';
import { type ActivateItem } from './tabs-context';
declare const __propDef: {
  props: Record<string, never>;
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {
    default: {
      active: boolean;
      activate: ActivateItem;
    };
  };
};
export type PanelProps = typeof __propDef.props;
export type PanelEvents = typeof __propDef.events;
export type PanelSlots = typeof __propDef.slots;
/**
 * @order 20
 *
 * The component sends `active` and `activate` props to the slot.
 *
 * - `active: boolean` — whether the current panel is active
 * - `activate: () => void` — call this function to make the current panel active
 */
export default class Panel extends SvelteComponentTyped<PanelProps, PanelEvents, PanelSlots> {}
export {};
