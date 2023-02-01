<script lang="ts">
  import './main.css';
  import { query } from 'svelte-pathfinder';
  import MainPage from './MainPage.svelte';
  import TabsPage from './tabs/Page.svelte';
  import { GlobNotifyPage } from './glob-notify';
  import { ColorPage } from './color';
  import { FloationUiActionPage } from './floating-ui-action';
  import { FocusActionPage } from './focus-action';
  import { KeyboardShortcutActionPage } from './keyboard-shortcut-action';
  import { ScrollChildActionPage } from './scroll-child-action';
</script>

<main>
  {#if $query.toString() === ''}<MainPage />
  {:else if $query.params.c === 'tabs'}<TabsPage />
  {:else if $query.params.c === 'glob-notify'}<GlobNotifyPage />
  {:else if $query.params.c === 'color'}<ColorPage />
  {:else if $query.params.c === 'floating-ui-action'}<FloationUiActionPage />
  {:else if $query.params.c === 'focus-action'}<FocusActionPage />
  {:else if $query.params.c === 'keyboard-shortcut-action'}<KeyboardShortcutActionPage />
  {:else if $query.params.c === 'scroll-child-action'}<ScrollChildActionPage />
  {:else}
    <h1 class="font-bold my-4 pb-2 text-3xl text-center">Not found</h1>
  {/if}
</main>
