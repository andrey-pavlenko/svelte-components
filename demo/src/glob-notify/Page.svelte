<script lang="ts">
  import { Tabs, Tab, TabList, TabPanel, setTitle } from '../_components';
  import API from './API.svelte';
  import BaseExample from './base-example/Main.svelte';
  import PackageLinks from '../_components/PackageLinks.svelte';
  import { getPackage } from '../MainPage.svelte';

  const pkg = getPackage('@apsc/glob-notify');
  setTitle(document.title.replace(/(•).*$/, '$1 GlobNotify'));
</script>

<section class="prose max-w-none my-4">
  <PackageLinks
    class="float-right after:clear-right"
    links={{ npm: pkg.npm, github: pkg.github }}
  />
  <h1 class="text-2xl max-w-lg">Component for notifications globally for the entire application</h1>
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
