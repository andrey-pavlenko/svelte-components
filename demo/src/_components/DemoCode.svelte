<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import 'svelte-highlight/styles/atom-one-dark.css';
  export let code = '';
</script>

<h3>Code</h3>
<HighlightSvelte {code} />
