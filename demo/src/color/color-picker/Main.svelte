<script lang="ts">
  import { DemoCode } from '../../_components';
  import Demo from './Demo.svelte';
</script>

<section class="prose max-w-none my-4">
  <Demo />
  <DemoCode
    code={`<${'script lang="ts"'}>
  import { ColorPicker } from '@apsc/color';
  import SampleColors from '../SampleColors.svelte';
  import '@apsc/color/color-picker.css';

  let color = '#f70';
</script>

<div class="flex gap-8">
  <ColorPicker class="basis-1/2 h-[256px] pt-2" bind:color />
  <div class="basis-1/2">
    <div>Current color: <code class="uppercase">{color}</code></div>
    <div class="p-2 border rounded-md">
      <div class="relative h-[1.5em]">
        <div class="bg-chess absolute left-0 top-0 right-0 bottom-0" />
        <div class="absolute left-0 top-0 right-0 bottom-0" style="background-color: {color};" />
      </div>
    </div>
    <SampleColors class="mt-4" on:color={({ detail }) => (color = detail)} />
  </div>
</div>`}
  />
</section>
