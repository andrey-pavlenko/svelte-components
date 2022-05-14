# A set of components for picking and editing colors [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/color)

- no inline styles
- contains a library for converting color spaces

Includes components:

- `ColorPicker` -- a component for picking a color with transparency
- `ColorInput` -- like `input type="color"` but with transparency
- `ColorEdit` -- allow edit color value via input fields

Inspired by:

- [svelte-awesome-color-picker](https://svelte-awesome-color-picker.vercel.app/)
- [svelte-color-picker](https://github.com/efeskucuk/svelte-color-picker)
- [Coloris](https://github.com/mdbassit/Coloris)

## Install

### NPM

```sh
npm i -D @apsc/color
```

### PNPM

```sh
pnpm add -D @apsc/color
```

## Usage

```tsx
<script>
  let color='#f00';
</script>
<ColorPicker bind:color />
```

Basic styles are described in the `color-picker.css` file.
