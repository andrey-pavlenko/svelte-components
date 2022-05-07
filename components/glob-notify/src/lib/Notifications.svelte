<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { TransitionConfig } from 'svelte/types/runtime/transition';
	import type { NotificationData } from './types';

	const store = writable<NotificationData[]>([]);

	let hasInstance = false;

	export function push<T extends Omit<NotificationData, 'id'>>(notification: T): symbol {
		if (!hasInstance) {
			throw new Error('No Notification component instance');
		}
		const withId = { id: Symbol('Notification'), ...notification };
		store.update((ns) => [...ns, withId]);
		if (notification.timeout && notification.timeout > 0) {
			setTimeout(() => pop(withId.id), notification.timeout);
		}
		return withId.id;
	}

	export function pop(id: symbol) {
		store.update((ns) => {
			const index = ns.findIndex((n) => n.id === id);
			if (index >= 0) {
				ns.splice(index, 1);
			}
			return ns;
		});
	}

	export function clear() {
		store.set([]);
	}

	export const subscribe = store.subscribe;

	export type TransitionParams = Record<string, unknown>;
	export type TransitionFn = (node: Element, params: Record<string, unknown>) => TransitionConfig;
</script>

<script lang="ts">
	import { onDestroy, onMount, type SvelteComponent } from 'svelte';
	import { slide } from 'svelte/transition';
	import NotificationItem from './NotificationItem.svelte';

	let classes = '';
	export { classes as class };
	export let style = '';
	export let item: typeof SvelteComponent = NotificationItem;
	export let transitionFn: TransitionFn = slide;
	export let transitionParams: TransitionParams = {};

	onMount(() => {
		if (hasInstance) {
			throw new Error('The Notifications component already has an instance');
		}
		hasInstance = true;
	});

	onDestroy(() => (hasInstance = false));
</script>

<div class={'c-notifications' + (classes ? ' ' + classes : '')} style={style || undefined}>
	{#each $store as notification (notification.id)}
		<svelte:component this={item} {transitionFn} {transitionParams} {notification} />
	{/each}
</div>
