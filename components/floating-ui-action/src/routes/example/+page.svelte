<script lang="ts">
  import { autoUpdate, computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { onMount } from 'svelte';
  let btn: HTMLElement;
  let tooltip: HTMLElement;
  let arr: HTMLElement;

  const _l = console.info;

  async function float() {
    const result = await computePosition(btn, tooltip, {
      placement: 'bottom',
      middleware: [offset(4), flip(), shift({ padding: 5 }), arrow({ element: arr })]
    });
    _l(result);
    Object.assign(tooltip.style, {
      left: `${result.x}px`,
      top: `${result.y}px`
    });
    const side: string =
      {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[result.placement.split('-')[0]] ?? '';
    _l(side, result.middlewareData.arrow);
    Object.assign(arr.style, {
      left: result.middlewareData.arrow?.x ? `${result.middlewareData.arrow.x}px` : '',
      top: result.middlewareData.arrow?.y ? `${result.middlewareData.arrow.y}px` : '',
      right: '',
      bottom: '',
      [side]: '-4px'
    });
  }

  onMount(() => autoUpdate(btn, tooltip, float));
</script>

<h1>Welcome to SvelteKit</h1>
{#each Array(15) as _}
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit magnam eos facilis ad
    eligendi, dolor commodi suscipit incidunt nobis cupiditate voluptates, ullam accusamus impedit.
    Aliquam, molestias porro? Rerum, blanditiis.
  </p>
{/each}
<button id="button" bind:this={btn}>My button</button>
<div id="tooltip" bind:this={tooltip}>
  My tooltip My tooltip with more content
  <div id="arrow" bind:this={arr} />
</div>
{#each Array(15) as _}
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit magnam eos facilis ad
    eligendi, dolor commodi suscipit incidunt nobis cupiditate voluptates, ullam accusamus impedit.
    Aliquam, molestias porro? Rerum, blanditiis.
  </p>
{/each}

<style>
  #tooltip {
    position: absolute;
    background: #222;
    color: white;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
    pointer-events: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
  }
  #arrow {
    position: absolute;
    background: #222;
    height: 8px;
    width: 8px;
    transform: rotate(45deg);
  }
</style>
