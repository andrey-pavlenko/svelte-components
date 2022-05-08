<script lang="ts">
  import { HighlightSvelte } from 'svelte-highlight';
  import 'svelte-highlight/styles/atom-one-dark.css';

  import simpleStyle from '@apsc/glob-notify/style.css?raw';
  import bootsrapStyle from '@apsc/glob-notify/bootstrap-like.css?raw';
  import { Notifications, notifications } from '@apsc/glob-notify';
  import quotes from './quotes.json';

  let quoteIndex = 0;
  $: quote = quotes[quoteIndex].en;
  $: author = quotes[quoteIndex].author;

  let hPos = 'left: 0; right: unset;';
  let vPos = 'top: 0; bottom: unset; flex-direction: column-reverse;';
  let timeout = 10_000;
  let styles = {
    simple: simpleStyle,
    bootstrap: bootsrapStyle
  };
  let stylesKey = Object.keys(styles)[0];
  const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  let type = types[0];

  function handlePushNotify({ currentTarget }: Event) {
    if (currentTarget instanceof HTMLFormElement) {
      const quote = currentTarget.elements['quote'].value;
      const author = currentTarget['author'].value;
      notifications.push({
        message: [
          quote ? `<div>${quote}</div>` : '',
          author ? `<div class="italic text-right">${author}</div>` : ''
        ]
          .filter((s) => !!s)
          .join(''),
        type,
        timeout
      });
      quoteIndex = quoteIndex + 1 >= quotes.length ? 0 : quoteIndex + 1;
      let ti = types.indexOf(type) + 1;
      if (ti < 0 || ti >= types.length) {
        type = types[0];
      } else {
        type = types[ti];
      }
    }
  }
</script>

<svelte:head>
  {@html `<${'style'} type="text/css" data-text="test">${styles[stylesKey]}</style>`}
</svelte:head>
<section class="prose max-w-none my-4">
  <Notifications style={'display: flex; ' + hPos + vPos} />
  <div class="mb-4 text-center">
    This example uses quotes from the <a
      target="_blank"
      href="https://github.com/skolakoda/programming-quotes-api">API</a
    > <a target="_blank" href="https://github.com/skolakoda">Škola koda</a>
  </div>
  <form
    class="not-prose w-full"
    on:submit|preventDefault={handlePushNotify}
    on:reset|preventDefault={() => notifications.clear()}
  >
    <div class="flex gap-4 items-center justify-evenly mb-4">
      <div>
        <div class="text-sm uppercase opacity-70">Side</div>
        <label
          ><input bind:group={hPos} type="radio" name="hpos" value="left: 0; right: unset;" /> left</label
        >
        <label><input bind:group={hPos} type="radio" name="hpos" value="right: 0;" /> right</label>
      </div>
      <div>
        <div class="text-sm uppercase opacity-70">Direction</div>
        <label
          ><input
            bind:group={vPos}
            type="radio"
            name="vpos"
            value="top: 0; bottom: unset; flex-direction: column-reverse;"
          /> from top</label
        >
        <label
          ><input
            bind:group={vPos}
            type="radio"
            name="vpos"
            value="top: unset; bottom: 0; flex-direction: column;"
          /> from bottom</label
        >
      </div>
      <label>
        <div class="text-sm uppercase opacity-70">Timeout</div>
        <input class="input w-[9ch]" min="0" step="100" bind:value={timeout} type="number" /></label
      >
      <div>
        <div class="text-sm uppercase opacity-70">Style</div>
        {#each Object.keys(styles) as s}
          <label class="mr-2 last:mr-0"
            ><input bind:group={stylesKey} type="radio" name="styles" value={s} /> {s}</label
          >
        {/each}
      </div>
    </div>
    <label class="block w-full mb-4">
      <textarea name="quote" value={quote} rows="3" class="input w-full" placeholder="Quote" />
    </label>
    <div class="mb-4 flex gap-4">
      <label class="block w-full">
        <input name="author" value={author} class="input w-full" type="text" placeholder="Author" />
      </label>
      <select class="input block w-full" bind:value={type}>
        {#each types as t}
          <option value={t}>{t}</option>
        {/each}
      </select>
    </div>
    <div class="mx-auto w-fit flex gap-4">
      <input class="input block w-40" type="submit" value="Notify" />
      <input class="input block w-40" type="reset" value="Clear" />
    </div>
  </form>

  <h3>Code</h3>
  <HighlightSvelte
    code={`<${'script lang="ts"'}>
  import simpleStyle from '@apsc/glob-notify/style.css?raw';
  import bootsrapStyle from '@apsc/glob-notify/bootstrap-like.css?raw';
  import { Notifications, notifications } from '@apsc/glob-notify';
  import quotes from './quotes.json';

  let quoteIndex = 0;
  $: quote = quotes[quoteIndex].en;
  $: author = quotes[quoteIndex].author;

  let hPos = 'left: 0; right: unset;';
  let vPos = 'top: 0; bottom: unset; flex-direction: column-reverse;';
  let timeout = 10_000;
  let styles = {
    simple: simpleStyle,
    bootstrap: bootsrapStyle
  };
  let stylesKey = Object.keys(styles)[0];
  const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  let type = types[0];

  function handlePushNotify({ currentTarget }: Event) {
    if (currentTarget instanceof HTMLFormElement) {
      const quote = currentTarget.elements['quote'].value;
      const author = currentTarget['author'].value;
      notifications.push({
        message: [
          quote ? \`<div>\${quote}</div>\` : '',
          author ? \`<div class="italic text-right">\${author}</div>\` : ''
        ]
          .filter((s) => !!s)
          .join(''),
        type,
        timeout
      });
      quoteIndex = quoteIndex + 1 >= quotes.length ? 0 : quoteIndex + 1;
      let ti = types.indexOf(type) + 1;
      if (ti < 0 || ti >= types.length) {
        type = types[0];
      } else {
        type = types[ti];
      }
    }
  }
</script>

<svelte:head>
  {@html \`<\${'style'} type="text/css" data-text="test">\${styles[stylesKey]}</style>\`}
</svelte:head>
<section class="prose max-w-none my-4">
  <Notifications style={'display: flex; ' + hPos + vPos} />
  <form
    class="not-prose w-full"
    on:submit|preventDefault={handlePushNotify}
    on:reset|preventDefault={() => notifications.clear()}
  >
    <div class="flex gap-4 items-center justify-evenly mb-4">
      <div>
        <div class="text-sm uppercase opacity-70">Side</div>
        <label
          ><input bind:group={hPos} type="radio" name="hpos" value="left: 0; right: unset;" /> left</label
        >
        <label><input bind:group={hPos} type="radio" name="hpos" value="right: 0;" /> right</label>
      </div>
      <div>
        <div class="text-sm uppercase opacity-70">Direction</div>
        <label
          ><input
            bind:group={vPos}
            type="radio"
            name="vpos"
            value="top: 0; bottom: unset; flex-direction: column-reverse;"
          /> from top</label
        >
        <label
          ><input
            bind:group={vPos}
            type="radio"
            name="vpos"
            value="top: unset; bottom: 0; flex-direction: column;"
          /> from bottom</label
        >
      </div>
      <label>
        <div class="text-sm uppercase opacity-70">Timeout</div>
        <input class="input w-[9ch]" min="0" step="100" bind:value={timeout} type="number" /></label
      >
      <div>
        <div class="text-sm uppercase opacity-70">Style</div>
        {#each Object.keys(styles) as s}
          <label class="mr-2 last:mr-0"
            ><input bind:group={stylesKey} type="radio" name="styles" value={s} /> {s}</label
          >
        {/each}
      </div>
    </div>
    <label class="block w-full mb-4">
      <textarea name="quote" value={quote} rows="3" class="input w-full" placeholder="Quote" />
    </label>
    <div class="mb-4 flex gap-4">
      <label class="block w-full">
        <input name="author" value={author} class="input w-full" type="text" placeholder="Author" />
      </label>
      <select class="input block w-full" bind:value={type}>
        {#each types as t}
          <option value={t}>{t}</option>
        {/each}
      </select>
    </div>
    <div class="mx-auto w-fit flex gap-4">
      <input class="input block w-40" type="submit" value="Notify" />
      <input class="input block w-40" type="reset" value="Clear" />
    </div>
  </form>
</section>`}
  />
</section>
