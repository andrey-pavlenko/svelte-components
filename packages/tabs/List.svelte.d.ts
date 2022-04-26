import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
           * Custom CSS class to add to the `c-tabs__tablist` base class for custom styling purposes
           */ class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ListProps = typeof __propDef.props;
export declare type ListEvents = typeof __propDef.events;
export declare type ListSlots = typeof __propDef.slots;
/**
 * @order 10
 * This is a child component for `Tabs` and a container for many `Tab` components
 *
 * ```tsx
 * <TabList>
 * <Tab>A</Tab>
 * <Tab>B</Tab>
 * </TabList>
 * ```
 */
export default class List extends SvelteComponentTyped<ListProps, ListEvents, ListSlots> {
}
export {};
