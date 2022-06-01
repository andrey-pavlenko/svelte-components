<script lang="ts">
  import { luminance } from '@apsc/color';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let classes = '';
  export { classes as class };

  let colors = [
    '#001219',
    '#005F73',
    '#0A9396',
    '#94D2BD',
    '#E9D8A6',
    '#EE9B00',
    '#CA6702',
    '#BB3E03',
    '#AE2012',
    '#9B2226',
    '#F72585',
    '#B5179E',
    '#7209B7',
    '#560BAD',
    '#480CA8',
    '#3A0CA3',
    '#3F37C9',
    '#4361EE',
    '#4895EF',
    '#4CC9F0'
  ];

  function randomizeAlpha(colors: string[]) {
    return resetAlpha(colors).map(
      (s) =>
        s +
        Math.floor(Math.random() * 255)
          .toString(16)
          .padStart(2, '0')
    );
  }

  function resetAlpha(colors: string[]) {
    return colors.map((s) => s.slice(0, 7));
  }
</script>

<div class={classes || undefined}>
  <span>Set color</span>
  <a class="text-sm" href={'javascript:void(0)'} on:click={() => (colors = randomizeAlpha(colors))}
    >randomize alpha</a
  >
  <span class="text-blue-500">&bull;</span>
  <a class="text-sm" href={'javascript:void(0)'} on:click={() => (colors = resetAlpha(colors))}
    >reset alpha</a
  >
</div>
<div>
  {#each colors as c}
    <button
      class="input uppercase m-1 text-sm min-w-[30%] hover:ring-2 ring-offset-1 ring-blue-600"
      style="background-color: {c}; color: {luminance(c) > 0.55 ? 'inherit' : 'white'}"
      on:click={() => dispatch('color', c)}>{c}</button
    >
  {/each}
</div>
