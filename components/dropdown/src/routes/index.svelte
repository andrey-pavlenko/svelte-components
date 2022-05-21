<script lang="ts">
  import '../lib/dropdown.css';
  import { Dropdown } from '../lib';

  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis cum aliquid nemo architecto. Et deserunt quam harum, eligendi quia suscipit non velit, iusto nesciunt deleniti sunt in veniam molestias?';
</script>

{#each [...Array(3).keys()] as a}
  <p>{lorem}</p>
{/each}
<Dropdown>
  <div slot="trigger" let:open>Click me {open}</div>
  <div slot="panel" let:open let:toggle>
    <button on:click={() => toggle()}>&times;</button>
    <div>Panel here {open}</div>
  </div>
</Dropdown>
{#each [...Array(10).keys()] as a}
  <p>{lorem}</p>
{/each}
<Dropdown />
{#each [...Array(10).keys()] as a}
  <p>{lorem}</p>
{/each}
