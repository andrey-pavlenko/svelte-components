<script lang="ts">
	import type { TransitionFn, TransitionParams } from './Notifications.svelte';
	import type { NotificationData } from './types';
	import { pop } from './Notifications.svelte';

	export let notification: NotificationData;
	export let transitionFn: TransitionFn = () => ({});
	export let transitionParams: TransitionParams = {};
</script>

<div
	transition:transitionFn={transitionParams}
	class={'c-notifications__item' + (notification.type ? ' ' + notification.type : '')}
>
	<span class="c-notifications__item__message">{@html notification.message || 'No message'}</span>
	<span
		role="button"
		aria-label="Close notification"
		class="c-notifications__item__close"
		on:click={() => pop(notification.id)}
	/>
</div>
