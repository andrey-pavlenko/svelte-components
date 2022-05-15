# Component for notifications globally for the entire application [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/glob-notify)

- no dependencies
- no inline styles
- one instance for the entire application
- with custom notification transition
- custom notification element components
- with configurable timeout for each notification

## Install

### NPM

```sh
npm i -D @apsc/glob-notify
```

### PNPM

```sh
pnpm add -D @apsc/glob-notify
```

## Usage

```tsx
<Notifications />
<Application />
```

The `Notifications` component has one instance for the entire application. Use the `Notifications` component at the top level of your markup, before any components that send notifications.

The default slot (optional) of the `Notifications` component is the markup for the notification element.

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

## Styling

The selectors used are in simple styles in `style.css`

```css
.c-notifications {
  position: fixed;
  padding: 0.5rem 1rem;
  width: 50vw;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.c-notifications__item {
  background-color: silver;
  margin: 0.5rem 0;
  padding: 1rem;
  display: flex;
}
.c-notifications__item__message {
  flex-grow: 1;
}
.c-notifications__item__close {
  font-size: 2rem;
  line-height: 1.25rem;
  cursor: default;
}
.c-notifications__item__close::before {
  content: '\00D7';
}
```

There is also a [`bootstrap-like.css`](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/bootstrap-like.css) style set.
