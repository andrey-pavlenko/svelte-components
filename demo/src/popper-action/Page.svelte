<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import DropdownExample from './DropdownExample.svelte';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Popper action')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <a class="float-right" href="/">Home</a>
  <h1 class="text-2xl">Action to use Popper.js</h1>
  <ul class="leading-6 mb-8">
    <li>
      dependence <a href="https://github.com/floating-ui/floating-ui/tree/v2.x" target="_blank"
        >Popper.js</a
      >
    </li>
    <li><a href="https://www.npmjs.com/package/@apsc/popper-action">NPM</a></li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Dropdown example</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><DropdownExample /></TabPanel>
  </Tabs>
</section>
