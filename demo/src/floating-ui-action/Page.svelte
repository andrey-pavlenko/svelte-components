<script lang="ts">
  import { Tabs, TabList, Tab, TabPanel, setTitle, HomeLink } from '../_components';
  import Api from './Api.svelte';
  import TransitionJsDemo from './transition-js/Main.svelte';
  import TransitionCssDemo from './transition-css/Main.svelte';
  import PackageLinks from '../_components/PackageLinks.svelte';
  import { getPackage } from '../MainPage.svelte';

  const pkg = getPackage('@apsc/floating-ui-action');

  setTitle(document.title.replace(/(•).*$/, '$1 Floating UI action'));
</script>

<section class="prose max-w-none my-4">
  <PackageLinks
    class="float-right after:clear-right"
    links={{ npm: pkg.npm, github: pkg.github }}
  />
  <h1 class="text-2xl">Action to use Floating UI</h1>
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
