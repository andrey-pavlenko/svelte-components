<script lang="ts">
  import { ColorEdit, luminance } from '../lib';
  import '../lib/color-edit.css';

  const colors = [
    '#023047',
    '#1D3557',
    '#219EBC',
    '#264653',
    '#2A9D8F',
    '#457B9D',
    '#8ECAE6',
    '#A2D2FF',
    '#A8DADC',
    '#BDE0FE',
    '#CDB4DB',
    '#E63946',
    '#E76F51',
    '#E9C46A',
    '#F1FAEE',
    '#F4A261',
    '#FB8500',
    '#FFAFCC',
    '#FFB703',
    '#FFC8DD'
  ];

  let color = colors[0];
</script>

<section>
  <div>
    {#each colors as c}
      <button class="color__button" on:click={() => (color = c)}>
        <span style="background-color: {c}; color: {luminance(c) < 0.55 ? 'white' : 'black'}"
          >{c}</span
        >
      </button>
    {/each}
  </div>

  <div style="margin: 1em 4px; position: relative;">
    <div class="alpha__bg" />
    <div style="background-color: {color}; height: 2em" />
  </div>
  <ColorEdit bind:color style="width: 150px" />
</section>

<style>
  .color__button {
    padding: 4px;
    margin: 4px;
    background-color: silver;
  }
  .color__button span {
    display: inline-block;
    height: 1.5em;
    width: 10ch;
    border: 1px solid gray;
  }
  .alpha__bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 0 0 / 1em 1em;
    z-index: -1;
  }
</style>
