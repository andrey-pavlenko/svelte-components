<script lang="ts" context="module">
  const styles = {
    code: 'bg-gray-100 text-red-800 px-1 py-0.5 rounded-sm'
  };

  export type PackageInfo = (typeof packages)[number];

  export const packages = [
    {
      name: '@apsc/tabs',
      link: '?c=tabs',
      npm: 'https://www.npmjs.com/package/@apsc/tabs',
      github: 'https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/tabs',
      description: `A component set and context class for organizing the Tabs interface`
    },
    {
      name: '@apsc/glob-notify',
      link: '?c=glob-notify',
      npm: 'https://www.npmjs.com/package/@apsc/glob-notify',
      github: 'https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/glob-notify',
      description: `Component for notifications globally for the entire application`
    },
    {
      name: '@apsc/color',
      link: '?c=color',
      npm: 'https://www.npmjs.com/package/@apsc/color',
      github: 'https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/color',
      description: `A set of components for picking and editing colors`
    },
    {
      name: '@apsc/floating-ui-action',
      link: '?c=floating-ui-action',
      npm: 'https://www.npmjs.com/package/@apsc/floating-ui-action',
      github:
        'https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/floating-ui-action',
      description: `Floating UI (ex. Popper) action for directive <code class="${styles.code}">use</code>`
    },
    {
      name: '@apsc/focus-action',
      link: '?c=focus-action',
      npm: 'https://www.npmjs.com/package/@apsc/focus-action',
      github:
        'https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/focus-action',
      description: `Action to control <code class="${styles.code}">focusin</code> and
        <code class="${styles.code}">focusout</code> for directive <code class="${styles.code}">use</code>`
    },
    {
      name: '@apsc/keyboard-shortcut-action',
      link: '?c=keyboard-shortcut-action',
      npm: 'https://www.npmjs.com/package/@apsc/keyboard-shortcut-action',
      github:
        'https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/keyboard-shortcut-action',
      description: `Action to call a function by keyboard shortcut for Svelte directive <code class="${styles.code}">use</code>`
    },
    {
      name: '@apsc/scroll-child-action',
      link: '?c=scroll-child-action',
      npm: 'https://www.npmjs.com/package/@apsc/scroll-child-action',
      github:
        'https://github.com/andrey-pavlenko/svelte-components/tree/main/packages/scroll-child-action',
      description: `Action to scroll the child to parent viewport for Svelte directive <code class="${styles.code}">use</code>`
    }
  ];

  export function getPackage(name: PackageInfo['name']): PackageInfo | undefined {
    return packages.find((p) => p.name === name);
  }
</script>

<script lang="ts">
  import npmLogo from './npm-logo.svg';
  import githubLogo from './github-logo.svg';
</script>

<section>
  <h1 class="font-bold my-4 pb-2 text-3xl border-b border-gray-400">Packages</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-fr gap-4">
    {#each packages as pkg}
      <div class="h-full box-border px-4 py-2 border-2 rounded-lg shadow-md">
        <div class="float-right ml-2 mb-1">
          <a class="block" href={pkg.npm} target="_blank" rel="noreferrer">
            <img class="max-w-[3.75em] mx-auto my-1" src={npmLogo} alt="NPM logo" />
          </a>
          <a class="block" href={pkg.github} target="_blank" rel="noreferrer">
            <img class="max-h-[1.75em] mx-auto my-1" src={githubLogo} alt="GitHub logo" />
          </a>
        </div>
        <div class="text-xl break-words mb-4"><a href={pkg.link}>{pkg.name}</a></div>
        <div class="clear-right">{@html pkg.description}</div>
      </div>
    {/each}
  </div>
</section>
