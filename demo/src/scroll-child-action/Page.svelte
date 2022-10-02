<script lang="ts">
  // import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import VerticalDemo from './VerticalDemo.svelte';
  import HorizontalDemo from './HorizontalDemo.svelte';
  import npmLogo from '../npm-logo.svg';
  import MainPageLink from '../MainPageLink.svelte';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Scroll child action')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <MainPageLink class="float-right" />
  <h1 class="text-2xl">
    Action to call a function by keyboard shortcut for Svelte directive <code>use</code>
  </h1>
  <a
    class="float-right"
    href="https://www.npmjs.com/package/@apsc/scroll-child-action"
    target="_blank"
    rel="noreferrer"
  >
    <img class="max-w-[4em]" src={npmLogo} alt="NPM logo" />
  </a>

  <ul class="leading-6 mb-8">
    <li>no dependencies</li>
    <li>useful for components like dropdown</li>
    <li>exports independent functions for vertical and horizontal scrolling of elements</li>
  </ul>

  <!-- <Tabs mode="remove">
    <TabList>
      <Tab>API</Tab>
      <Tab>Vertical demo</Tab>
      <Tab>Horizontal demo</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><VerticalDemo /></TabPanel>
    <TabPanel><HorizontalDemo /></TabPanel>
  </Tabs> -->
</section>
