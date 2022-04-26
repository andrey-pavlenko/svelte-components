<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import BaseExample from './BaseExample.svelte';
  import NestedExample from './NestedExample.svelte';
  import QuotesExample from './QuotesExample.svelte';
  import './styles.css';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Tabs')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <a
    class="not-prose float-right text-white no-underline px-2 rounded-md bg-blue-400 hover:bg-blue-600"
    href="/">Home</a
  >
  <h1 class="mb-0">Tabs</h1>
  <h3 class="mt-0 text-gray-500">
    <ul>
      <li>Состоит из главного компонента, включающего дочерние</li>
      <li>Без встроенных стилей</li>
    </ul>
  </h3>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Base example</Tab>
      <Tab>Nested Example</Tab>
      <Tab>Quotes Example</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><BaseExample /></TabPanel>
    <TabPanel><NestedExample /></TabPanel>
    <TabPanel><QuotesExample /></TabPanel>
  </Tabs>
</section>
