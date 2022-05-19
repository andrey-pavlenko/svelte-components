<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import 'svelte-highlight/styles/atom-one-dark.css';
  import Api from './Api.svelte';
  import CororPickerExample from './ColorPickerExample.svelte';
  import NestedExample from './NestedExample.svelte';
  import QuotesExample from './QuotesExample.svelte';
  import './styles.css';
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Color')}</title>
</svelte:head>
<section class="prose max-w-none my-4">
  <a class="float-right" href="/">Home</a>
  <h1 class="text-2xl">A set of components for picking and editing colors</h1>
  <ul class="leading-6 mb-8">
    <li>no inline styles</li>
    <li>
      the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a
        href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts"
        target="_blank">utils.d.ts</a
      > for definitions of types and functions
    </li>
    <li><a href="https://www.npmjs.com/package/@apsc/color">NPM</a></li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>CororPicker example</Tab>
      <Tab>Nested Example</Tab>
      <Tab>Quotes Example</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><CororPickerExample /></TabPanel>
    <TabPanel><NestedExample /></TabPanel>
    <TabPanel><QuotesExample /></TabPanel>
  </Tabs>
</section>
