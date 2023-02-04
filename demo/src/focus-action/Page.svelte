<script lang="ts">
  import { setTitle, Tabs, TabList, Tab, TabPanel } from '../_components';
  import Api from './Api.svelte';
  import RequiredDemo from './required-demo/Main.svelte';
  import DropdownDemo from './dropdown-demo/Main.svelte';
  import StyleDemo from './style-demo/Main.svelte';
  import PackageLinks from '../_components/PackageLinks.svelte';
  import { getPackage } from '../MainPage.svelte';

  const pkg = getPackage('@apsc/focus-action');
  setTitle(document.title.replace(/(•).*$/, '$1 Focus action'));
</script>

<section class="prose max-w-none my-4">
  <PackageLinks
    class="float-right after:clear-right"
    links={{ npm: pkg.npm, github: pkg.github }}
  />
  <h1 class="text-2xl">
    Action to control <code>focusin</code> and <code>focusout</code><br />for directive
    <code>use</code>
  </h1>
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
