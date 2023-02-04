<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab, setTitle } from '../_components';
  import Api from './Api.svelte';
  import ColorPickerExample from './color-picker/Main.svelte';
  import ColorEditExample from './color-edit/Main.svelte';
  import ColorInputExample from './color-input/Main.svelte';
  import './styles.css';
  import PackageLinks from '../_components/PackageLinks.svelte';
  import { getPackage } from '../MainPage.svelte';

  const pkg = getPackage('@apsc/color');

  setTitle(document.title.replace(/(•).*$/, '$1 Color'));
</script>

<section class="prose max-w-none my-4">
  <PackageLinks
    class="float-right after:clear-right"
    links={{ npm: pkg.npm, github: pkg.github }}
  />
  <h1 class="text-2xl">A set of components for picking and editing colors</h1>
  <ul class="leading-6 mb-8">
    <li>no inline styles</li>
    <li>
      the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See
      <a
        href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/utils.d.ts"
        target="_blank"
        rel="noreferrer">utils.d.ts</a
      > for definitions of types and functions
    </li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>ColorPicker example</Tab>
      <Tab>ColorEdit example</Tab>
      <Tab>Color input Example</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel><ColorPickerExample /></TabPanel>
    <TabPanel><ColorEditExample /></TabPanel>
    <TabPanel><ColorInputExample /></TabPanel>
  </Tabs>
</section>
