<script lang="ts">
  import { slide, scale } from 'svelte/transition';
  import { arrow, flip, offset, shift } from '@floating-ui/dom';
  import type { ComputePositionConfig } from '@floating-ui/dom';
  import createAction from '$lib';
  // import type { FloatingOptions, UpdateOptions } from '$lib/floating-ui-action';
  import Tooltip from '../cmp/Tooltip.svelte';
  import Dropdown from '../cmp/Dropdown.svelte';

  const _l = console.info;
  /*
  const [useRef, useFloat] = createAction();
  let arr: HTMLElement;
  function getFloatingOptions(): FloatingOptions {
    _l('arr', arr);
    return {
      placement: 'bottom',
      middleware: [offset(4), flip(), shift({ padding: 4 }), arrow({ element: arr })],
      fn: ({ placement, middlewareData: { arrow } }) => {
        const side: string =
          {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right'
          }[placement.split('-')[0]] ?? '';
        Object.assign(arr.style, {
          left: arrow?.x ? `${arrow.x}px` : '',
          top: arrow?.y ? `${arrow.y}px` : '',
          right: '',
          bottom: '',
          [side]: '-4px'
        });
        _l('fn', placement, arrow);
      }
    };
  }
  */
</script>

<h1>Welcome to SvelteKit</h1>
{#each Array(10) as _}
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit magnam eos facilis ad
    eligendi, dolor commodi suscipit incidunt nobis cupiditate voluptates, ullam accusamus impedit.
    Aliquam, molestias porro? Rerum, blanditiis.
  </p>
{/each}

<Tooltip />
<Dropdown />

<!-- <button use:useRef on:click={() => (show = !show)}>Click me</button>
{#if show}
  <div use:useFloat={getFloatingOptions()} class="tooltip" transition:scale|local>
    My tooltip with more content
    <div bind:this={arr} class="arrow" />
  </div>
{/if} -->

{#each Array(15) as _}
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odit magnam eos facilis ad
    eligendi, dolor commodi suscipit incidunt nobis cupiditate voluptates, ullam accusamus impedit.
    Aliquam, molestias porro? Rerum, blanditiis.
  </p>
{/each}
