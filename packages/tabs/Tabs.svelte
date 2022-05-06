<script>import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import { contextName, createContext } from './tabs';
let classes = '';
/**
 * Custom CSS class to add to the `c-tabs` base class for custom styling purposes
 */
export { classes as class };
/**
 * The CSS class that will be added to the child `Tab` component when it becomes selected
 */
export let selectedTabClass = 'active';
/**
 * The CSS class for the **unselected** TabPanel. Applies when `mode = hide`. More in the `mode` prop
 */
export let hiddenPanelClass = '';
/**
 * `TabPanel` hiding and showing mode.
 *
 * `remove`: The panel will be removed from the DOM.
 * `hide`: the panel will be hidden by the style from the `hiddenPanelClass` CSS class, or if `hiddenPanelClass` is not specified with the style `display: none`
 *
 * @type {"remove" | "hide"}
 */
export let mode = 'hide';
const tabs = [];
const panels = [];
const selectedTab = writable(null);
const selectedPanel = writable(null);
const context = createContext({
    mode,
    tabs,
    panels,
    selectedTab,
    selectedPanel,
    selectedTabClass,
    hiddenPanelClass
});
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
 */
export const selectedIndex = context.selectedIndex;
/**
 * Select `Tab` component by index. Allows arguments for `Array.prototype.at(number)`
 * ```js
 * // Select first Tab
 * tabsRef.selectTab(0);
 * // Select last Tab
 * tabsRef.selectTab(-1);
 * ```
 * @type {(number) => void}
 */
export const selectTab = context.selectTab;
setContext(contextName, context);
</script>

<!--
@component
@order 0
This is the root component. It's a container for one `TabList` and many `TabPanel`
```tsx
<Tabs>
  <TabList>
    <Tab>A</Tab>
    <Tab>B</Tab>
  </TabList>
  <TabPanel>A</TabPanel>
  <TabPanel>B</TabPanel>
</Tabs>
```

Child components of `Tabs` have access to the context by `contextName`
```ts
export type TabId = symbol;
export type PanelId = symbol;
export type TabsMode = 'remove' | 'hide';
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
export const contextName = Symbol('TABS');
```

Simple style. Source `style.css`
```css
.c-tabs__tablist {
  display: flex;
  border-bottom: 2px solid silver;
  margin-bottom: 1em;
}
.c-tabs__tab {
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  font-size: 1.25em;
  padding: 0.25em 0.5em;
  position: relative;
  top: 3px;
}
.c-tabs__tab.active {
  background-color: silver;
  border-bottom: 4px solid gray;
}
```
-->

<div class={'c-tabs' + (classes ? ' ' + classes : '')}>
  <slot />
</div>
