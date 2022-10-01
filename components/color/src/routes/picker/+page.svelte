<script lang="ts">
  import '../../lib/color-picker.css';
  import { ColorPicker, hexToHsl, luminance } from '../../lib';

  let color = '#f70';

  let colors = [
    '#fff',
    '#000',
    '#95f9e3',
    '#69ebd0',
    '#49d49d',
    '#558564',
    '#564946',
    '#ef6351',
    '#f38375',
    '#f7a399',
    '#fbc3bc',
    '#ffe3e0'
  ];

  const _l = console.info;
</script>

<section>
  <div
    style="height: 32px; background-color: {color}; color: {luminance(color) > 0.55
      ? 'black'
      : 'white'}"
  >
    luminance: {luminance(color).toFixed(3)}
  </div>
  <div>{color} {JSON.stringify(hexToHsl(color))}</div>
  <ColorPicker style="height: 300px; width: 300px" bind:color debounce={0} />

  <div>
    {#each colors as c}
      <button
        style="background-color: {c}; color: {luminance(c) > 0.55 ? 'black' : 'white'}"
        on:click={() => (color = c)}>Set {c}</button
      >
    {/each}
  </div>
</section>
