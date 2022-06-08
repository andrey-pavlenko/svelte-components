<script lang="ts">
  const styles = {
    code: `bg-gray-200 px-1 rounded-sm`
  };
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Home')}</title>
</svelte:head>
<section>
  <h1 class="font-bold my-4 pb-2 text-3xl border-b border-gray-400">Packages</h1>
  <ul>
    <li>
      <a href="/tabs">Tabs</a> &ndash; A set of components for organizing a tabbed interface
      <a href="https://www.npmjs.com/package/@apsc/tabs" target="_blank">NPM</a>
    </li>
    <li>
      <a href="/glob-notify">GlobNotify</a> &ndash; Component for notifications globally for the
      entire application
      <a href="https://www.npmjs.com/package/@apsc/glob-notify" target="_blank">NPM</a>
    </li>
    <li>
      <a href="/floating-ui-action">Floating UI</a>
      action for directive <code class={styles.code}>use</code>
      <a href="https://www.npmjs.com/package/@apsc/floating-ui-action" target="_blank">NPM</a>
    </li>
    <li>
      <a href="/focus-action">Action</a> to control
      <code class={styles.code}>focusin</code>
      and
      <code class={styles.code}>focusout</code>
      for directive <code class={styles.code}>use</code>
      <a href="https://www.npmjs.com/package/@apsc/focus-action" target="_blank">NPM</a>
    </li>
    <li>
      <a href="/color">Color</a> &ndash; A set of components for picking and editing colors
      <a href="https://www.npmjs.com/package/@apsc/color" target="_blank">NPM</a>
    </li>
    <li>
      Action to call a function by <a href="/keyboard-shortcut-action">keyboard shortcut</a> for
      Svelte directive <code class={styles.code}>use</code>
      <a href="https://www.npmjs.com/package/@apsc/keyboard-shortcut-action" target="_blank">NPM</a>
    </li>
  </ul>
</section>
