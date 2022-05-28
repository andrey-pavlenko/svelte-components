<script lang="ts">
  import useFocus from '../lib';

  let focused = false;
  const focus = [() => (focused = true), () => (focused = false)];
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div class="focus-plate" class:focused use:useFocus={focus}>
  <div>
    <div>Focus plate</div>
    <div>Target 1</div>
    <div>Target 2</div>
  </div>
  <div>
    <button>Button inside</button>
  </div>
  <div>
    <textarea rows="5">Some text</textarea>
  </div>
</div>

<div>
  <button>Button 1</button>
</div>
<div>
  <button>Button 2</button>
</div>

<div>
  <textarea cols="30" rows="10">Some text</textarea>
</div>

<style>
  .focus-plate {
    margin: 1em auto;
    width: 50%;
    padding: 1em;
    border: 1px solid silver;
    border-radius: 1em;
  }
  .focus-plate.focused {
    outline: 2px solid blue;
  }
</style>
