import { SvelteComponentTyped } from 'svelte';
declare const __propDef: {
  props: {
    s?: number | undefined;
    v?: number | undefined;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export type SvPickerProps = typeof __propDef.props;
export type SvPickerEvents = typeof __propDef.events;
export type SvPickerSlots = typeof __propDef.slots;
export default class SvPicker extends SvelteComponentTyped<
  SvPickerProps,
  SvPickerEvents,
  SvPickerSlots
> {}
export {};
