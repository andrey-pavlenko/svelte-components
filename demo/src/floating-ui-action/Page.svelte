<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import TransitionJsDemo from './TransitionJsDemo.svelte';
  import TransitionCssDemo from './TransitionCssDemo.svelte';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Floating UI action')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <a class="float-right" href="/">Home</a>
  <h1 class="text-2xl">Action to use Floating UI</h1>
  <ul class="leading-6 mb-8">
    <li>allows you to use both Svelte transitions and CSS transitions</li>
    <li>
      dependence <a href="https://github.com/floating-ui/floating-ui" target="_blank"
        >@floating-ui/dom</a
      >
    </li>
    <li><a href="https://www.npmjs.com/package/@apsc/floating-ui-action">NPM</a></li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Transition JS demo</Tab>
      <Tab>Transition CSS demo</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><TransitionJsDemo /></TabPanel>
    <TabPanel><TransitionCssDemo /></TabPanel>
  </Tabs>
</section>
