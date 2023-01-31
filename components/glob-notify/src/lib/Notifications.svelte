<script lang="ts" context="module">
  import { writable } from 'svelte/store';
  import type { NotificationData } from './types';

  let hasInstance = false;

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
  export const notifications = (function () {
    const { subscribe, set, update } = writable<NotificationData[]>([]);

    return {
      subscribe,
      clear() {
        set([]);
      },
      push<T extends Omit<NotificationData, 'id'>>(notification: T): symbol {
        if (!hasInstance) {
          throw new Error('No Notification component instance');
        }
        const withId = { id: Symbol('Notification'), ...notification };
        update((ns) => [...ns, withId]);
        if (notification.timeout && notification.timeout > 0) {
          setTimeout(() => this.pop(withId.id), notification.timeout);
        }
        return withId.id;
      },
      pop(id: symbol) {
        update((ns) => {
          const index = ns.findIndex((n) => n.id === id);
          if (index >= 0) {
            ns.splice(index, 1);
          }
          return ns;
        });
      }
    };
  })();
</script>

<script lang="ts">
  import type { TransitionConfig } from 'svelte/types/runtime/transition';
  import { onDestroy, onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let classes = '';
  /**
   * Custom CSS class to add to the `c-notifications` base class for custom styling purposes
   */
  export { classes as class };

  /**
   * Custom styles will be passed to the `style` attribute
   */
  export let style = '';

  /**
   * Transition function for notification, default `slide`
   */
  export let transitionFn: (node: Element, params: Record<string, unknown>) => TransitionConfig =
    slide;

  /**
   * Transition function parameters
   */
  export let transitionParams: Record<string, unknown> = {};

  onMount(() => {
    if (hasInstance) {
      throw new Error('The Notifications component already has an instance');
    }
    hasInstance = true;
  });

  onDestroy(() => (hasInstance = false));

  /**
   * @typedef {{
   *  id: symbol;
   *  type?: string;
   *  timeout?: number;
   *  message?: string;
   * }} NotificationData
   * @slot {{ notification: NotificationData }}
   */
</script>

<!--
@component
@order 0
The `Notifications` component has one instance for the entire application. Use the `Notifications` component at the top level of your markup, before any components that send notifications.

The default slot (optional) of the `Notifications` component is the markup for the notification element.
```tsx
<Notifications />
<Application />
```

The `Notifications` component exports the `notifications` custom store corresponding to the store contract.
```js
{
  subscribe: Subscriber<NotificationData[]>,
  clear: () => void,
  push: (notification: NotificationData) => symbol,
  pop: (id: symbol) => void
}
```

You can subscribe to changes in the store, and append and remove notifications anywhere in your app.
```svelte
<script>
  import { Notifications, notifications } from '@apsc/glob-notify';
  function handleNotify() {
    notifications.push({ message: 'Hello from NyApp' })
  }
</script>
<Notifications />
<h1>Welcome to MyApp</h1>
<button on:click={handleNotify}>Notify</button>
```

The package exports two style sheets: <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/style.css" target="_blank">`style.css`</a> and <a href="https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/bootstrap-like.css" target="_blank">`bootstrap-like.css`</a>.
 -->

<div class={'c-notifications' + (classes ? ' ' + classes : '')} style={style || undefined}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#each $notifications as notification (notification.id)}
    <slot {notification}
      ><div
        transition:transitionFn={transitionParams}
        class={'c-notifications__item' + (notification.type ? ' ' + notification.type : '')}
      >
        <span class="c-notifications__item__message"
          >{@html notification.message || 'No message'}</span
        >
        <span
          role="button"
          aria-label="Close notification"
          class="c-notifications__item__close"
          on:click={() => notifications.pop(notification.id)}
        />
      </div></slot
    >
  {/each}
</div>
