<script lang="ts">
  let classes = '';
  export { classes as class };
  export let style = '';
  export let open = true;
  export let disabled = false;

  export function toggle(value?: boolean) {
    console.info('toggle');
    if (value != null) {
      open = value;
    } else {
      open = !open;
    }
  }
</script>

<div
  class={'c-dropdown' + (classes ? ' ' + classes : '')}
  style={style || undefined}
  data-open={open || undefined}
>
  <button class="c-dropdown__trigger" {disabled} on:click={() => toggle()}
    ><slot name="trigger" {open} {toggle}>slot "trigger"</slot></button
  >
  {#if open}
    <div class="c-dropdown__panel"><slot name="panel" {open} {toggle}>slot "panel"</slot></div>
  {/if}
</div>
