import { type Readable, type Writable } from 'svelte/store';
export declare type TabId = symbol;
export declare type PanelId = symbol;
export declare type TabsMode = 'remove' | 'hide';
export interface TabsContext {
    mode: TabsMode;
    registerTab: () => TabId;
    registerPanel: () => PanelId;
    selectTab: (tab: TabId | number) => void;
    selectedTab: Writable<symbol | null>;
    selectedPanel: Writable<symbol | null>;
    selectedIndex: Readable<number>;
    selectedTabClass: string;
    hiddenPanelClass: string;
}
export declare const contextName: unique symbol;
export declare function createContext({ mode, tabs, selectedTab, panels, selectedPanel, selectedTabClass, hiddenPanelClass }: {
    mode: TabsMode;
    tabs: TabId[];
    selectedTab: Writable<TabId | null>;
    panels: PanelId[];
    selectedPanel: Writable<TabId | null>;
    selectedTabClass: string;
    hiddenPanelClass: string;
}): TabsContext;
