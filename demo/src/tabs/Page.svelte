<script lang="ts">
  import { Tabs, Tab, TabList, TabPanel, HomeLink, setTitle } from '../_components';
  import Api from './Api.svelte';
  import BaseExample from './base-example/Main.svelte';
  import NestedExample from './nested-example/Main.svelte';
  import QuotesExample from './quote-examples/Main.svelte';
  import ScrollingTab from './scrolling-tabs/Main.svelte';
  import PackageLinks from '../_components/PackageLinks.svelte';
  import { getPackage } from '../MainPage.svelte';

  const pkg = getPackage('@apsc/tabs');

  setTitle(document.title.replace(/(•).*$/, '$1 Tabs'));
</script>

<section class="prose max-w-none my-4">
  <PackageLinks
    class="float-right after:clear-right"
    links={{ npm: pkg.npm, github: pkg.github }}
  />
  <h1 class="text-2xl">A component set and context class for organizing the Tabs interface</h1>
  <ul class="leading-6 mb-8">
    <li>no dependencies</li>
    <li>no inline styles</li>
    <li>with context to control tab switching</li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Base example</Tab>
      <Tab>Nested example</Tab>
      <Tab>Scrolling tabs</Tab>
      <Tab>Quotes example</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><BaseExample /></TabPanel>
    <TabPanel><NestedExample /></TabPanel>
    <TabPanel let:active
      >{#if active}<ScrollingTab />{/if}
    </TabPanel>
    <TabPanel><QuotesExample /></TabPanel>
  </Tabs>
</section>
