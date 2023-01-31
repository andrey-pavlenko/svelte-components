<script lang="ts">
  import { Tabs, TabList, Tab, TabPanel, setTitle, HomeLink } from '../_components';
  import Api from './Api.svelte';
  import TransitionJsDemo from './transition-js/Main.svelte';
  import TransitionCssDemo from './transition-css/Main.svelte';
  import npmLogo from '../npm-logo.svg';

  setTitle(document.title.replace(/(•).*$/, '$1 Floating UI action'));
</script>

<section class="prose max-w-none my-4">
  <HomeLink class="float-right" />
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
