<script lang="ts">
  import { setTitle, HomeLink, Tabs, TabList, Tab, TabPanel } from '../_components';
  import Api from './Api.svelte';
  import RequiredDemo from './required-demo/Main.svelte';
  import DropdownDemo from './dropdown-demo/Main.svelte';
  import StyleDemo from './style-demo/Main.svelte';
  import npmLogo from '../npm-logo.svg';

  setTitle(document.title.replace(/(•).*$/, '$1 Focus action'));
</script>

<section class="prose max-w-none my-4">
  <HomeLink class="float-right" />
  <h1 class="text-2xl">
    Action to control <code>focusin</code> and <code>focusout</code><br />for directive
    <code>use</code>
  </h1>
  <a
    class="float-right"
    href="https://www.npmjs.com/package/@apsc/focus-action"
    target="_blank"
    rel="noreferrer"
  >
    <img class="max-w-[4em]" src={npmLogo} alt="NPM logo" />
  </a>
  <ul class="leading-6 mb-8">
    <li>no dependencies</li>
    <li>correctly detects loss of focus with <code>Tab</code></li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Required demo</Tab>
      <Tab>Dropdown demo</Tab>
      <Tab>Style demo</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><RequiredDemo /></TabPanel>
    <TabPanel><DropdownDemo /></TabPanel>
    <TabPanel><StyleDemo /></TabPanel>
  </Tabs>
</section>
