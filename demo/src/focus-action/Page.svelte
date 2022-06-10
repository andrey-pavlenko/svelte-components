<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import RequiredDemo from './RequiredDemo.svelte';
  import DropdownDemo from './DropdownDemo.svelte';
  import StyleDemo from './StyleDemo.svelte';
  import npmLogo from '../npm-logo.svg';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Focus action')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <a class="float-right" href="/">Home</a>
  <h1 class="text-2xl">
    Action to control <code>focusin</code> and <code>focusout</code><br />for directive
    <code>use</code>
  </h1>
  <a class="float-right" href="https://www.npmjs.com/package/@apsc/focus-action" target="_blank">
    <img class="max-w-[4em]" src={npmLogo} alt="NPM logo" />
  </a>
  <ul class="leading-6 mb-8">
    <li>no dependencies</li>
    <li>correctly detects loss of focus with <code>Tab</code></li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Reqired demo</Tab>
      <Tab>Dropdown demo</Tab>
      <Tab>Style demo</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><RequiredDemo /></TabPanel>
    <TabPanel><DropdownDemo /></TabPanel>
    <TabPanel><StyleDemo /></TabPanel>
  </Tabs>
</section>
