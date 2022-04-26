import { onDestroy } from 'svelte';
import { derived } from 'svelte/store';
export const contextName = Symbol('TABS');
export function createContext({ mode, tabs, selectedTab, panels, selectedPanel, selectedTabClass, hiddenPanelClass }) {
    const selectedIndex = derived(selectedTab, (tab) => tabs.indexOf(tab ?? Symbol()));
    return {
        mode,
        registerTab: () => {
            const tab = Symbol('tab');
            tabs.push(tab);
            selectedTab.update((current) => current ?? tab);
            onDestroy(() => {
                const index = tabs.indexOf(tab);
                if (index >= 0) {
                    tabs.splice(index, 1);
                    selectedTab.update((current) => current === tab ? tabs[index] || tabs[tabs.length - 1] : current);
                }
            });
            return tab;
        },
        registerPanel: () => {
            const panel = Symbol('panel');
            panels.push(panel);
            selectedPanel.update((current) => current ?? panel);
            onDestroy(() => {
                const index = panels.indexOf(panel);
                if (index >= 0) {
                    panels.splice(index, 1);
                    selectedPanel.update((current) => current === panel ? panels[index] || panels[panels.length - 1] : current);
                }
            });
            return panel;
        },
        selectTab: (tab) => {
            let index;
            if (typeof tab === 'number') {
                index = tabs.indexOf(tabs.at(tab) ?? Symbol());
            }
            else {
                index = tabs.indexOf(tab);
            }
            if (index >= 0 && index < tabs.length) {
                selectedTab.set(tabs[index]);
                selectedPanel.set(panels[index]);
            }
        },
        selectedTab,
        selectedPanel,
        selectedIndex,
        selectedTabClass,
        hiddenPanelClass
    };
}
