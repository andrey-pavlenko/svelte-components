# Svelte component for notifications globally for the entire application

- no dependencies
- no inline styles
- one instance for the entire application
- custom notification transition
- custom notification element components
- configurable timeout for each notification

### [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/?c=glob-notify) &bull; [API](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/API.md)

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

### [Base](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/style.css)

```js
import '@apsc/glob-notify/style.css';
```

### [Bootstrap-like](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/glob-notify/bootstrap-like.css)

```js
import '@apsc/glob-notify/bootstrap-like.css';
```
