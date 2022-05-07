import * as ns from './Notifications.svelte';
const { default: Notifications, ...notifications } = ns;

export { Notifications, notifications };
export { default as NotificationItem } from './NotificationItem.svelte';
export type { NotificationData } from './types';
