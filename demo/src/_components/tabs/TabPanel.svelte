<script lang="ts">
  import { Panel } from '@apsc/tabs';
</script>

<Panel let:active>
  <div class="doc-tabs__panel" class:active><slot {active} /></div>
</Panel>
