<script lang="ts">
  import npmLogo from './npm-logo.svg';
  const styles = {
    code: `bg-gray-200 px-1 rounded-sm`
  };
</script>

<svelte:head>
  <title>{document.title.replace(/(•).*$/, '$1 Home')}</title>
</svelte:head>
<section>
  <h1 class="font-bold my-4 pb-2 text-3xl border-b border-gray-400">Packages</h1>
  <div class="flex flex-wrap gap-6 mb-12">
    <div class="pkg-tile">
      <div class="pkg-tile__link"><a href="?c=tabs">@apsc/tabs</a></div>
      <a
        class="pkg-tile__npm"
        href="https://www.npmjs.com/package/@apsc/tabs"
        target="_blank"
        rel="noreferrer"
      >
        <img src={npmLogo} alt="NPM logo" />
      </a>
      <div class="pkg-tile__description">A set of components for organizing a tabbed interface</div>
    </div>
    <div class="pkg-tile">
      <div class="pkg-tile__link"><a href="?c=glob-notify">@apsc/glob-notify</a></div>
      <a
        class="pkg-tile__npm"
        href="https://www.npmjs.com/package/@apsc/glob-notify"
        target="_blank"
        rel="noreferrer"
      >
        <img src={npmLogo} alt="NPM logo" />
      </a>
      <div class="pkg-tile__description">
        Component for notifications globally for the entire application
      </div>
    </div>
    <div class="pkg-tile">
      <div class="pkg-tile__link"><a href="?c=color">@apsc/color</a></div>
      <a
        class="pkg-tile__npm"
        href="https://www.npmjs.com/package/@apsc/color"
        target="_blank"
        rel="noreferrer"
      >
        <img src={npmLogo} alt="NPM logo" />
      </a>
      <div class="pkg-tile__description">A set of components for picking and editing colors</div>
    </div>
  </div>
  <div class="flex flex-wrap gap-6 mb-12">
    <div class="pkg-tile">
      <div class="pkg-tile__link">
        <a href="?c=floating-ui-action">@apsc/floating-ui-action</a>
      </div>
      <a
        class="pkg-tile__npm"
        href="https://www.npmjs.com/package/@apsc/floating-ui-action"
        target="_blank"
        rel="noreferrer"
      >
        <img src={npmLogo} alt="NPM logo" />
      </a>
      <div class="pkg-tile__description">
        Floating UI (ex. Popper) action for directive <code class={styles.code}>use</code>
      </div>
    </div>
    <div class="pkg-tile">
      <div class="pkg-tile__link"><a href="?c=focus-action">@apsc/focus-action</a></div>
      <a
        class="pkg-tile__npm"
        href="https://www.npmjs.com/package/@apsc/focus-action"
        target="_blank"
        rel="noreferrer"
      >
        <img src={npmLogo} alt="NPM logo" />
      </a>
      <div class="pkg-tile__description">
        Action to control <code class={styles.code}>focusin</code> and
        <code class={styles.code}>focusout</code> for directive <code class={styles.code}>use</code>
      </div>
    </div>
    <div class="pkg-tile">
      <div class="pkg-tile__link">
        <a href="?c=keyboard-shortcut-action">@apsc/keyboard-shortcut-action</a>
      </div>
      <a
        class="pkg-tile__npm"
        href="https://www.npmjs.com/package/@apsc/keyboard-shortcut-action"
        target="_blank"
        rel="noreferrer"
      >
        <img src={npmLogo} alt="NPM logo" />
      </a>
      <div class="pkg-tile__description">
        Action to call a function by keyboard shortcut for Svelte directive <code
          class={styles.code}>use</code
        >
      </div>
    </div>
    <div class="pkg-tile">
      <div class="pkg-tile__link">
        <a href="?c=scroll-child-action">@apsc/scroll-child-action</a>
      </div>
      <a
        class="pkg-tile__npm"
        href="https://www.npmjs.com/package/@apsc/scroll-child-action"
        target="_blank"
        rel="noreferrer"
      >
        <img src={npmLogo} alt="NPM logo" />
      </a>
      <div class="pkg-tile__description">
        Action to scroll the child to parent viewport for Svelte directive <code class={styles.code}
          >use</code
        >
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .pkg-tile {
    @apply px-4 py-2 border-2 rounded-lg shadow-md;
    flex-basis: calc(33.33% - 1rem);
  }
  .pkg-tile__npm {
    @apply float-right ml-4;
  }
  .pkg-tile__npm img {
    @apply max-w-[4em];
  }
  .pkg-tile__link {
    @apply block mb-3 text-xl underline underline-offset-4;
  }
  .pkg-tile__description {
    @apply leading-5;
  }
</style>
