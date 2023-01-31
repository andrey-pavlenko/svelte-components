<script lang="ts">
  import { setTitle, HomeLink, Tabs, TabList, Tab, TabPanel } from '../_components';
  import Api from './Api.svelte';
  import VerticalDemo from './vertical-demo/Main.svelte';
  import HorizontalDemo from './horizontal-demo/Main.svelte';
  import npmLogo from '../npm-logo.svg';

  setTitle(document.title.replace(/(•).*$/, '$1 Scroll child action'));
</script>

<section class="prose max-w-none my-4">
  <HomeLink class="float-right" />
  <h1 class="text-2xl">
    Action to scroll the child to parent viewport Svelte directive <code>use</code>
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
