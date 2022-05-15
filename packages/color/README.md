# A set of components for picking and editing colors [Docs & Demo](https://andrey-pavlenko.github.io/svelte-components/#/color)

- no inline styles
- the module exports functions for color conversion from/to hex/rgb/hsl/hsv color space. See [`converter.d.ts`](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/converter.d.ts) for definitions of types and functions.

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

Basic styles are described in the [`color-picker.css`](https://github.com/andrey-pavlenko/svelte-components/blob/main/packages/color/color-picker.css) file.