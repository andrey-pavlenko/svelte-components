<script lang="ts">
  import './main.css';
  import { Route, router } from 'tinro';
  import MainPage from './MainPage.svelte';
  import { TabsPage } from './tabs';
  import { GlobNotifyPage } from './glob-notify';
  import { ColorPage } from './color';
  import { PopperActionPage } from './floating-ui-action';

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
  <Route path="/floating-ui-action"><PopperActionPage /></Route>
</main>
