<script lang="ts">
  import '../lib/color-picker.css';
  import { ColorPicker } from '../lib';

  let color = '#f00';
</script>

<section>
  <div style="height: 32px; background-color: {color};" />
  <ColorPicker style="height: 300px" bind:color />
</section>
