<script lang="ts">
  import { query } from 'svelte-pathfinder';
  import type { StringParams } from 'svelte-pathfinder';

  import npmLogo from '../npm-logo.svg';
  import githubLogo from '../github-logo.svg';

  let classes: string | undefined = undefined;
  export { classes as class };

  export let links = {
    npm: '',
    github: ''
  };

  function handleHomeClick() {
    $query = new String('') as StringParams;
  }
</script>

<div class={'w-fit space-y-2' + (classes ? ' ' + classes : '')}>
  <a class="flex items-center gap-1" href="/" on:click|preventDefault={handleHomeClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em"
      ><path
        fill="currentColor"
        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
      /></svg
    >
    <span>Home</span>
  </a>
  {#if links.npm}
    <a class="block" href={links.npm} target="_blank" rel="noreferrer">
      <img class="w-[3.75em] mx-auto my-0" src={npmLogo} alt="NPM logo" />
    </a>
  {/if}
  {#if links.github}
    <a class="block" href={links.github} target="_blank" rel="noreferrer">
      <img class="h-[2em] mx-auto my-0" src={githubLogo} alt="NPM logo" />
    </a>
  {/if}
</div>
