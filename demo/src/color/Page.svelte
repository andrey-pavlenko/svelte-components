<script lang="ts">
  import { Tabs, TabList, TabPanel, Tab, setTitle, HomeLink } from '../_components';
  import Api from './Api.svelte';
  import ColorPickerExample from './color-picker/Main.svelte';
  import ColorEditExample from './color-edit/Main.svelte';
  import ColorInputExample from './color-input/Main.svelte';
  import npmLogo from '../npm-logo.svg';
  import './styles.css';

  setTitle(document.title.replace(/(•).*$/, '$1 Color'));
</script>

<section class="prose max-w-none my-4">
  <HomeLink class="float-right" />
  <h1 class="text-2xl">A set of components for picking and editing colors</h1>
  <a
    class="float-right"
    href="https://www.npmjs.com/package/@apsc/color"
    target="_blank"
    rel="noreferrer"
  >
    <img class="max-w-[4em]" src={npmLogo} alt="NPM logo" />
  </a>
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
