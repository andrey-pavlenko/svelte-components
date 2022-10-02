<script lang="ts">
  // import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import TransitionJsDemo from './TransitionJsDemo.svelte';
  import TransitionCssDemo from './TransitionCssDemo.svelte';
  import npmLogo from '../npm-logo.svg';
  import MainPageLink from '../MainPageLink.svelte';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Floating UI action')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <MainPageLink class="float-right" />
  <h1 class="text-2xl">Action to use Floating UI</h1>
  <a
    class="float-right"
    href="https://www.npmjs.com/package/@apsc/floating-ui-action"
    target="_blank"
    rel="noreferrer"
  >
    <img class="max-w-[4em]" src={npmLogo} alt="NPM logo" />
  </a>
  <ul class="leading-6 mb-8">
    <li>allows you to use both Svelte transitions and CSS transitions</li>
    <li>
      dependence <a
        href="https://github.com/floating-ui/floating-ui"
        target="_blank"
        rel="noreferrer">@floating-ui/dom</a
      >
    </li>
  </ul>

  <!-- <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Transition JS demo</Tab>
      <Tab>Transition CSS demo</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><TransitionJsDemo /></TabPanel>
    <TabPanel><TransitionCssDemo /></TabPanel>
  </Tabs> -->
</section>
