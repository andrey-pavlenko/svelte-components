<script lang="ts">
  import { setTitle, HomeLink, Tabs, Tab, TabList, TabPanel } from '../_components';
  import Api from './Api.svelte';
  import NavigationDemo from './navigation/Main.svelte';
  import npmLogo from '../npm-logo.svg';

  setTitle(document.title.replace(/(•).*$/, '$1 Keyboard shortcut action'));
</script>

<section class="prose max-w-none my-4">
  <HomeLink class="float-right" />
  <h1 class="text-2xl">
    Action to call a function by keyboard shortcut for Svelte directive <code>use</code>
  </h1>
  <a
    class="float-right"
    href="https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"
    target="_blank"
    rel="noreferrer"
  >
    <img class="max-w-[4em]" src={npmLogo} alt="NPM logo" />
  </a>
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
