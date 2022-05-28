<script lang="ts">
  import './main.css';
  import { Route, router } from 'tinro';
  import MainPage from './MainPage.svelte';
  import { TabsPage } from './tabs';
  import { GlobNotifyPage } from './glob-notify';
  import { ColorPage } from './color';
  import { FloationUiActionPage } from './floating-ui-action';
  import { FocusActionPage } from './focus-action';

  router.mode.hash();
</script>

<svelte:head>
  <title>APSC &bull; Home</title>
</svelte:head>
<main>
  <Route path="/"><MainPage /></Route>
  <Route path="/tabs"><TabsPage /></Route>
  <Route path="/glob-notify"><GlobNotifyPage /></Route>
  <Route path="/color"><ColorPage /></Route>
  <Route path="/floating-ui-action"><FloationUiActionPage /></Route>
  <Route path="/focus-action"><FocusActionPage /></Route>
</main>
