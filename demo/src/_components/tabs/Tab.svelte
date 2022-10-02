<script lang="ts">
  import { Tab } from '@apsc/tabs';
  import scrollAction from '@apsc/scroll-child-action';
</script>

<Tab let:active let:activate>
  <button class="doc-tabs__tab" class:active on:click={activate} use:scrollAction={{ x: active }}
    ><slot /></button
  >
</Tab>
