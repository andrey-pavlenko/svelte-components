<script>import { getContext } from 'svelte';
import { contextName } from './tabs';
let classes = '';
/**
 * Custom CSS class to add to the `c-tabs__tabpanel` base class for custom styling purposes
 */
export { classes as class };
const { mode, registerPanel, selectedPanel, selectedTab, selectedIndex, hiddenPanelClass } = getContext(contextName);
/**
 * The CSS class that will be added when `TabPanel` becomes **unselected**. *Default value from `Tabs.hiddenPanelClass`*
 *
 * @type {string}
 */
export let hiddenClass = hiddenPanelClass;
const id = registerPanel();
let _hiddenClass = '';
let _style = undefined;
let _remove = true;
$: (function (isActive) {
    if (isActive) {
        _remove = false;
        _style = undefined;
        _hiddenClass = '';
    }
    else {
        if (mode !== 'hide') {
            _remove = true;
            _style = undefined;
            _hiddenClass = '';
        }
        else {
            _remove = false;
            if (hiddenClass) {
                _style = undefined;
                _hiddenClass = hiddenClass;
            }
            else {
                _style = 'display: none';
                _hiddenClass = '';
            }
        }
    }
})($selectedPanel === id);
</script>

<!--
@component
@order 30
This is a child component for `Tabs` and a container for tab body

```tsx
<Tabs>
  <TabList><Tab>A</Tab><Tab>B</Tab></TabList>
  <TabPanel>A</TabPanel>
  <TabPanel>B</TabPanel>
</Tabs>
```
-->

{#if !_remove}
  <div
    class={['c-tabs__tabpanel', classes, _hiddenClass].filter((s) => !!s).join(' ')}
    style={_style}
  >
    <slot index={$selectedIndex} tabId={$selectedTab} panelId={id} />
  </div>
{/if}
