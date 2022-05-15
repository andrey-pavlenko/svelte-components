<script lang="ts">
  import '../lib/color-picker.css';
  import { ColorPicker } from '../lib';

  let color = '#f70';

  let colors = [
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
</script>

<section>
  <div style="height: 32px; background-color: {color};" />
  <div>{color}</div>
  <ColorPicker style="height: 300px" bind:color />

  <div>
    {#each colors as c}
      <button style="background-color: {c};" on:click={() => (color = c)}>Set {c}</button>
    {/each}
  </div>
</section>
