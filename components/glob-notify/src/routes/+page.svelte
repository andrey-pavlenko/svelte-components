<script lang="ts">
	import { Notifications, notifications } from '../lib';
	import quotes from './quotes.json';
	import '../lib/bootstrap-like.css';

	let quoteNo = 0;
	const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
	let type = types[0];

	function getMessage() {
		const message = quotes[quoteNo++];
		if (quoteNo >= quotes.length) {
			quoteNo = 0;
		}
		return message;
	}

	function getType() {
		const t = type;
		let index = types.indexOf(t) + 1;
		if (index >= types.length) {
			index = 0;
		}
		type = types[index];
		return t;
	}

	function handlePush() {
		const message = getMessage();
		const t = getType();
		notifications.push({
			message: `<div>${message.text}</div><div style="text-align: right;font-style: italic">${message.author}</div>`,
			type: t
		});
	}
</script>

<Notifications style="bottom: unset; top: 0; display: flex; flex-direction: column-reverse;" />
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
	<select bind:value={type}>
		{#each types as t}
			<option value={t}>{t}</option>
		{/each}
	</select>
	<button on:click={handlePush}>Push</button>
	<button on:click={() => notifications.clear()}>Clear</button>
</div>
