import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
           * Custom CSS class to add to the `c-tabs__tabpanel` base class for custom styling purposes
           */ class?: string | undefined;
        /**
           * The CSS class that will be added when `TabPanel` becomes **unselected**. *Default value from `Tabs.hiddenPanelClass`*
           *
           * @type {string}
           */ hiddenClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            index: number;
            tabId: symbol | null;
            panelId: symbol;
        };
    };
};
export declare type PanelProps = typeof __propDef.props;
export declare type PanelEvents = typeof __propDef.events;
export declare type PanelSlots = typeof __propDef.slots;
/**
 * @order 30
 * This is a child component for `Tabs` and a container for tab body
 *
 * ```tsx
 * <Tabs>
 * <TabList><Tab>A</Tab><Tab>B</Tab></TabList>
 * <TabPanel>A</TabPanel>
 * <TabPanel>B</TabPanel>
 * </Tabs>
 * ```
 */
export default class Panel extends SvelteComponentTyped<PanelProps, PanelEvents, PanelSlots> {
}
export {};
