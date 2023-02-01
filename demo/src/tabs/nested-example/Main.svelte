<script lang="ts">
  import { DemoCode } from '../../_components';
  import Demo from './Demo.svelte';
</script>

<section class="prose max-w-none my-4">
  <Demo />
  <DemoCode
    code={`<${'script lang="ts"'}>
  import { Tab, Panel, Tabs } from '@apsc/tabs';
  let count = 5;
</script>

<Tabs>
  {#each { length: count } as _, tab}
    <Tab let:active let:activate>
      <button class="tab level-1" class:active on:click={activate}>Tab #{tab}</button>
    </Tab>{' '}
  {/each}
  {#each { length: count } as _, panel}
    <Panel let:active>
      <div class="panel" class:active>
        <div>Tab #{panel} context. Nested tabs below</div>
        <div class="mt-3">
          <Tabs>
            {#each { length: count } as _, tab}
              <Tab let:active let:activate>
                <button class="tab level-2" class:active on:click={activate}>Child #{tab}</button>
              </Tab>{' '}
            {/each}
            {#each { length: count } as _, panel}
              <Panel let:active>
                <div class="panel" class:active>Child tab #{panel} context</div>
              </Panel>
            {/each}
          </Tabs>
        </div>
      </div>
    </Panel>
  {/each}
</Tabs>

<${'style lang="postcss"'}>
  .tab {
    @apply appearance-none px-2  rounded-md;
  }
  .tab.level-1 {
    @apply bg-blue-100 text-blue-800;
  }
  .tab.level-1.active {
    @apply bg-blue-800 text-blue-100;
  }
  .tab.level-2 {
    @apply bg-green-100 text-green-800;
  }
  .tab.level-2.active {
    @apply bg-green-800 text-green-100;
  }
  .panel {
    @apply mt-3;
  }
  .panel:not(.active) {
    display: none;
  }
</style>`}
  />
</section>
