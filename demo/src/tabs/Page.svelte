<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import BaseExample from './BaseExample.svelte';
  import NestedExample from './NestedExample.svelte';
  import QuotesExample from './QuotesExample.svelte';
  import './styles.css';
  import npmLogo from '../npm-logo.svg';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Tabs')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <a class="float-right" href="/">Home</a>
  <h1 class="text-2xl">A set of components for organizing a tabbed interface</h1>
  <a class="float-right" href="https://www.npmjs.com/package/@apsc/tabs" target="_blank">
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
      <Tab>Nested Example</Tab>
      <Tab>Quotes Example</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><BaseExample /></TabPanel>
    <TabPanel><NestedExample /></TabPanel>
    <TabPanel><QuotesExample /></TabPanel>
  </Tabs>
</section>
