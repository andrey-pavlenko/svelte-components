<script lang="ts">
  import API from '../../../packages/popper-action/README.md?raw';
  import SvelteMarkdown from 'svelte-markdown';
</script>

<section class="documentation">
  <SvelteMarkdown source={API.slice(API.search(/^[#\s]+API$/im) + 1)} />
</section>
