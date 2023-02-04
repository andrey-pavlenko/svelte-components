<script lang="ts">
  import { setTitle, Tabs, TabList, Tab, TabPanel } from '../_components';
  import Api from './Api.svelte';
  import VerticalDemo from './vertical-demo/Main.svelte';
  import HorizontalDemo from './horizontal-demo/Main.svelte';
  import PackageLinks from '../_components/PackageLinks.svelte';
  import { getPackage } from '../MainPage.svelte';

  const pkg = getPackage('@apsc/scroll-child-action');
  setTitle(document.title.replace(/(•).*$/, '$1 Scroll child action'));
</script>

<section class="prose max-w-none my-4">
  <PackageLinks
    class="float-right after:clear-right"
    links={{ npm: pkg.npm, github: pkg.github }}
  />
  <h1 class="text-2xl">
    Action to scroll the child to parent viewport Svelte directive <code>use</code>
  </h1>
  <ul class="leading-6 mb-8">
    <li>no dependencies</li>
    <li>useful for components like dropdown</li>
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Vertical demo</Tab>
      <Tab>Horizontal demo</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel let:active
      >{#if active}<VerticalDemo />{/if}</TabPanel
    >
    <TabPanel let:active
      >{#if active}<HorizontalDemo />{/if}</TabPanel
    >
  </Tabs>
</section>
