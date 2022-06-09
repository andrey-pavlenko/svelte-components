<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import VerticalDemo from './VerticalDemo.svelte';
  import HorizontalDemo from './HorizontalDemo.svelte';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Scroll child action')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <a class="float-right" href="/">Home</a>
  <h1 class="text-2xl">
    Action to call a function by keyboard shortcut for Svelte directive <code>use</code>
  </h1>
  <ul class="leading-6 mb-8">
    <li>no dependencies</li>
    <li>useful for components like dropdown</li>
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>
  </ul>

  <Tabs mode="remove">
    <TabList>
      <Tab>API</Tab>
      <Tab>Vertical demo</Tab>
      <Tab>Horizontal demo</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><VerticalDemo /></TabPanel>
    <TabPanel><HorizontalDemo /></TabPanel>
  </Tabs>
</section>
