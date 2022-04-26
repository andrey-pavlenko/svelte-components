import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
           * Custom CSS class to add to the `c-tabs__tab` base class for custom styling purposes
           */ class?: string | undefined;
        /**
           * The CSS class that will be added when `Tab` becomes selected. *Default value from `Tabs.selectedTabClass`*
           *
           * @type {string}
           */ selectedClass?: string | undefined;
        /**
           * Disable `Tab` for pointer, but it's possible to select tab by function `Tabs.selectTab(index)`. *Default `undefined`*
           *
           * @type {boolean | undefined}
           */ disabled?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            index: number;
            id: symbol;
        };
    };
};
export declare type TabProps = typeof __propDef.props;
export declare type TabEvents = typeof __propDef.events;
export declare type TabSlots = typeof __propDef.slots;
/**
 * This is a child component for `TabList`
 * @order 20
 *
 * ```tsx
 * <Tab>A</Tab>
 * ```
 */
export default class Tab extends SvelteComponentTyped<TabProps, TabEvents, TabSlots> {
}
export {};
