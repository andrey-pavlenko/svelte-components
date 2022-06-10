<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import API from './API.svelte';
  import BaseExample from './BaseExample.svelte';
  import npmLogo from '../npm-logo.svg';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 GlobNotify')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <a class="float-right" href="/">Home</a>
  <h1 class="text-2xl max-w-lg">Component for notifications globally for the entire application</h1>
  <a class="float-right" href="https://www.npmjs.com/package/@apsc/glob-notify" target="_blank">
    <img class="max-w-[4em]" src={npmLogo} alt="NPM logo" />
  </a>
  <ul class="leading-6 mb-8">
    <li>no dependencies</li>
    <li>no inline styles</li>
    <li>one instance for the entire application</li>
    <li>with custom notification transition</li>
    <li>custom notification element components</li>
    <li>with configurable timeout for each notification</li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Base example</Tab>
    </TabList>
    <TabPanel><API /></TabPanel>
    <TabPanel><BaseExample /></TabPanel>
  </Tabs>
</section>
