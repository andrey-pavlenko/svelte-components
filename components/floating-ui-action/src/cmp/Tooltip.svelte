<script lang="ts">
  import { offset, flip, shift, arrow, type ComputePositionReturn } from '@floating-ui/dom';
  import { scale, slide } from 'svelte/transition';
  import createAction from '../lib';

  const _l = console.info;

  const [useReference1, useFloat1, setAutoupdate1] = createAction(true);
  const [useReference2, useFloat2, setAutoupdate2] = createAction(true);

  function positionFloat1(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    // _l('positionFloat1', pos, reference, floating);
    _l('positionFloat1', pos, middlewareData.arrow);
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      // _l('positionFloat2', staticSide, x, y);
      if (staticSide) {
        Object.assign(arrow1.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-4px'
        });
      }
    }
  }

  function positionFloat2(pos: ComputePositionReturn) {
    const { placement, middlewareData } = pos;
    // _l('positionFloat2', placement, middlewareData, reference, floating);
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
      }[placement.split('-')[0]];
      // _l('positionFloat2', staticSide, x, y);
      if (staticSide) {
        // const padding = arrow2.style.padding;
        // arrow2.style.padding = '0';
        Object.assign(arrow2.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-4px'
        });
        // setTimeout(() => (arrow2.style.padding = padding));
      }
    }
  }

  let show1 = false;
  let show2 = false;
  let transitionFn = scale;
  let arrow1: HTMLElement;
  let arrow2: HTMLElement;

  $: setAutoupdate1(show1);
  $: setAutoupdate2(show2);

  // $: handleShowChange(show);
</script>

<button on:click={() => (show1 = !show1)} use:useReference1>Tooltip1</button>
{#if show1}
  <div
    class="tooltip"
    use:useFloat1={{
      placement: 'bottom',
      middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrow1 })],
      callback: positionFloat1
    }}
    transition:transitionFn|local
  >
    <div class="arrow" bind:this={arrow1} />
    My tooltip with more content 2
  </div>
{/if}

<button on:click={() => (show2 = !show2)} use:useReference2>Tooltip2</button>
<div
  class="tooltip"
  class:in={show2}
  class:out={!show2}
  use:useFloat2={{
    placement: 'bottom',
    middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrow2 })],
    callback: positionFloat2
  }}
  transition:transitionFn|local
>
  <div class="arrow" bind:this={arrow2} />
  My tooltip with more content 2
</div>

<style>
  .tooltip {
    position: absolute;
    background: #222;
    color: white;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
    pointer-events: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    transition: opacity 0.25s linear;
  }
  .tooltip.in {
    opacity: 1;
  }
  .tooltip.out {
    opacity: 0;
  }
  .tooltip .arrow {
    position: absolute;
    background: #222;
    height: 8px;
    width: 8px;
    transform: rotate(45deg);
  }
</style>
