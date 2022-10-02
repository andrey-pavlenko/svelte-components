<script lang="ts">
  import { Tabs, Tab, TabList, TabPanel, HomeLink, setTitle } from '../_components';
  import Api from './Api.svelte';
  import BaseExample from './base-example/Main.svelte';
  import NestedExample from './nested-example/Main.svelte';
  import QuotesExample from './quote-examples/Main.svelte';
  import ScrollingTab from './scrolling-tabs/Main.svelte';
  import npmLogo from '../npm-logo.svg';

  setTitle(document.title.replace(/(•).*$/, '$1 Tabs'));
</script>

<section class="prose max-w-none my-4">
  <HomeLink class="float-right" />
  <h1 class="text-2xl">A set of components for organizing a tabbed interface</h1>
  <a
    class="float-right"
    href="https://www.npmjs.com/package/@apsc/tabs"
    target="_blank"
    rel="noreferrer"
  >
    <img class="max-w-[4em]" src={npmLogo} alt="NPM logo" />
  </a>
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
