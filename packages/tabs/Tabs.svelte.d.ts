import { SvelteComponentTyped } from "svelte";
import { type TabsMode } from './tabs';
declare const __propDef: {
    props: {
        /**
           * Custom CSS class to add to the `c-tabs` base class for custom styling purposes
           */ class?: string | undefined;
        /**
           * The CSS class that will be added to the child `Tab` component when it becomes selected
           */ selectedTabClass?: string | undefined;
        /**
           * The CSS class for the **unselected** TabPanel. Applies when `mode = hide`. More in the `mode` prop
           */ hiddenPanelClass?: string | undefined;
        /**
           * `TabPanel` hiding and showing mode.
           *
           * `remove`: The panel will be removed from the DOM.
           * `hide`: the panel will be hidden by the style from the `hiddenPanelClass` CSS class, or if `hiddenPanelClass` is not specified with the style `display: none`
           *
           * @type {"remove" | "hide"}
           */ mode?: TabsMode | undefined;
        /**
           * Index of selected `Tab` component
           * ```js
           * let selectedIndex;
           * tabsRef.selectedIndex.subscrive(
           *   (index) => selectedIndex = index
           * );
           * ```
           * ```js
           * let selectedIndex = tabsRef.selectedIndex;
           * $: if ($selectedIndex === 0) {
           *   console.log('First tab selected');
           * }
           * ```
           * @type {Readable<number>}
           */ selectedIndex?: import("svelte/store").Readable<number> | undefined;
        /**
           * Select `Tab` component by index. Allows arguments for `Array.prototype.at(number)`
           * ```js
           * // Select first Tab
           * tabsRef.selectTab(0);
           * // Select last Tab
           * tabsRef.selectTab(-1);
           * ```
           * @type {(number) => void}
           */ selectTab?: ((tab: number | symbol) => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type TabsProps = typeof __propDef.props;
export declare type TabsEvents = typeof __propDef.events;
export declare type TabsSlots = typeof __propDef.slots;
/**
 * @order 0
 * This is the root component. It's a container for one `TabList` and many `TabPanel`
 * ```tsx
 * <Tabs>
 *  <TabList>
 *    <Tab>A</Tab>
 *    <Tab>B</Tab>
 *  </TabList>
 *  <TabPanel>A</TabPanel>
 *  <TabPanel>B</TabPanel>
 * </Tabs>
 * ```
 *
 * Child components of `Tabs` have access to the context by `contextName`
 * ```ts
 * export type TabId = symbol;
 * export type PanelId = symbol;
 * export type TabsMode = 'remove' | 'hide';
 * export interface TabsContext {
 * mode: TabsMode;
 * registerTab: () => TabId;
 * registerPanel: () => PanelId;
 * selectTab: (tab: TabId | number) => void;
 * selectedTab: Writable<symbol | null>;
 * selectedPanel: Writable<symbol | null>;
 * selectedIndex: Readable<number>;
 * selectedTabClass: string;
 * hiddenPanelClass: string;
 * }
 * export const contextName = Symbol('TABS');
 * ```
 *
 * Basic styles are described in the <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/tabs/style.css" target="_blank">`style.css`</a> file.
 */
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
    get selectedIndex(): import("svelte/store").Readable<number>;
    get selectTab(): (tab: number | symbol) => void;
}
export {};
