# A set of components for organizing a tabbed interface [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/tabs)

- no dependencies
- no inline styles
- with context to control tab switching

## Install

### NPM

```sh
npm i -D @apsc/tabs
```

### PNPM

```sh
pnpm add -D @apsc/tabs
```

## Usage

```tsx
<Tabs>
  <TabList>
    <Tab>A</Tab>
    <Tab>B</Tab>
  </TabList>
  <TabPanel>A</TabPanel>
  <TabPanel>B</TabPanel>
</Tabs>
```

## Styling

### Base

```js
import '@apsc/tabs/style.css';
```

### Custom

`tabs-style.css`

```css
.c-tabs__tablist {
  display: flex;
  border-bottom: 2px solid silver;
  margin-bottom: 1em;
}
.c-tabs__tab {
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  font-size: 1.25em;
  padding: 0.25em 0.5em;
  position: relative;
  top: 3px;
}
.c-tabs__tab.active {
  background-color: silver;
  border-bottom: 4px solid gray;
}
```

```js
import './tabs-style.css';
```
