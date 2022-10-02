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
export type TabProps = typeof __propDef.props;
export type TabEvents = typeof __propDef.events;
export type TabSlots = typeof __propDef.slots;
/**
 * @order 10
 *
 * The component sends `active` and `activate` props to the slot.
 *
 * - `active: boolean` — whether the current tab is active
 * - `activate: () => void` — call this function to make the current tab active
 */
export default class Tab extends SvelteComponentTyped<TabProps, TabEvents, TabSlots> {}
export {};
