<script lang="ts">
	import './main.css';
	import { Route, router } from 'tinro';
	import MainPage from './MainPage.svelte';
	import { TabsPage } from './tabs';

	router.mode.hash();
</script>

<svelte:head>
	<title>APSC &bull; Home</title>
</svelte:head>
<main>
	<Route path="/"><MainPage /></Route>
	<Route path="/tabs"><TabsPage /></Route>
</main>
