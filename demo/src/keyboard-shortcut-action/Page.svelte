<script lang="ts">
  import { setTitle, Tabs, Tab, TabList, TabPanel } from '../_components';
  import Api from './Api.svelte';
  import NavigationDemo from './navigation/Main.svelte';
  import PackageLinks from '../_components/PackageLinks.svelte';
  import { getPackage } from '../MainPage.svelte';

  const pkg = getPackage('@apsc/keyboard-shortcut-action');
  setTitle(document.title.replace(/(•).*$/, '$1 Keyboard shortcut action'));
</script>

<section class="prose max-w-none my-4">
  <PackageLinks
    class="float-right after:clear-right"
    links={{ npm: pkg.npm, github: pkg.github }}
  />
  <h1 class="text-2xl">
    Action to call a function by keyboard shortcut for Svelte directive <code>use</code>
  </h1>
  <ul class="leading-6 mb-8">
    <li>allows to reduce keyboard event handling code</li>
    <li>
      dependence <a
        href="https://www.npmjs.com/package/keyboard-event-to-string"
        target="_blank"
        rel="noreferrer">keyboard-event-to-string</a
      >
    </li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>API</Tab>
      <Tab>Navigation demo</Tab>
    </TabList>
    <TabPanel><Api /></TabPanel>
    <TabPanel let:active
      >{#if active}
        <NavigationDemo />
      {/if}
    </TabPanel>
  </Tabs>
</section>
