import { SvelteComponentTyped } from "svelte";
import type { NotificationData } from './types';
/**
 * Store of notifications
 *
 * @type {{
 *  subscribe: Subscriber<NotificationData[]>;
 *  clear: () => void;
 *  push: (n: NotificationData) => symbol;
 *  pop: (id: symbol) => void
 * }}
 */
export declare const notifications: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<NotificationData[]>, invalidate?: ((value?: NotificationData[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    clear(): void;
    push<T extends Omit<NotificationData, "id">>(notification: T): symbol;
    pop(id: symbol): void;
};
import type { TransitionConfig } from 'svelte/types/runtime/transition';
declare const __propDef: {
    props: {
        /**
           * Custom CSS class to add to the `c-notifications` base class for custom styling purposes
           */ class?: string | undefined;
        /**
           * Custom styles will be passed to the `style` attribute
           */ style?: string | undefined;
        /**
           * Transition function for notification, default `slide`
           */ transitionFn?: ((node: Element, params: Record<string, unknown>) => TransitionConfig) | undefined;
        /**
           * Transition function parameters
           */ transitionParams?: Record<string, unknown> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            notification: NotificationData;
        };
    };
};
export declare type NotificationsProps = typeof __propDef.props;
export declare type NotificationsEvents = typeof __propDef.events;
export declare type NotificationsSlots = typeof __propDef.slots;
/**
 * @order 0
 * The `Notifications` component has one instance for the entire application. Use the `Notifications` component at the top level of your markup, before any components that send notifications.
 *
 * The default slot (optional) of the `Notifications` component is the markup for the notification element.
 * ```tsx
 * <Notifications />
 * <Application />
 * ```
 *
 * The `Notifications` component exports the `notifications` custom store corresponding to the store contract.
 * ```js
 * {
 * subscribe: Subscriber<NotificationData[]>,
 * clear: () => void,
 * push: (notification: NotificationData) => symbol,
 * pop: (id: symbol) => void
 * }
 * ```
 *
 * You can subscribe to changes in the store, and append and remove notifications anywhere in your app.
 * ```svelte
 * <script>
 * import { Notifications, notifications } from '@apsc/glob-notify';
 * function handleNotify() {
 *   notifications.push({ message: 'Hello from NyApp' })
 * }
 * </script>
 * <Notifications />
 * <h1>Welcome to MyApp</h1>
 * <button on:click={handleNotify}>Notify</button>
 * ```
 *
 * The package exports two style sheets: <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/style.css" target="_blank">`style.css`</a> and <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/bootstrap-like.css" target="_blank">`bootstrap-like.css`</a>.
 */
export default class Notifications extends SvelteComponentTyped<NotificationsProps, NotificationsEvents, NotificationsSlots> {
}
export {};
