<script lang="ts">
  import { query } from 'svelte-pathfinder';
  import type { StringParams } from 'svelte-pathfinder';

  let classes: string | undefined = undefined;
  export { classes as class };

  function handleClick() {
    $query = new String('') as StringParams;
  }
</script>

<a class={classes} href="/" on:click|preventDefault={handleClick}>Home</a>
