<script lang="ts" context="module">
  const url = 'https://programming-quotes-api.herokuapp.com';

  interface Author {
    name: string;
    wikiUrl: string;
    quoteCount: number;
  }

  type AuthorsMap = Record<string, Author>;

  interface Quote {
    id: string;
    author: string;
    en: string;
  }

  async function fetchAuthors(): Promise<Author[]> {
    const rs = await fetch(url + '/Authors');
    if (rs.status >= 400) {
      const text = await rs.text();
      throw new Error(`${rs.status}: ${text || rs.statusText}`);
    }
    const contentType = rs.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError('Wrong content-type');
    }
    const authors: AuthorsMap = await rs.json();
    return Object.values(authors).sort((a, b) => a.name.localeCompare(b.name));
  }

  async function fetchQuotes(author: string): Promise<Quote[]> {
    const rs = await fetch(url + '/Quotes/author/' + author);
    if (rs.status >= 400) {
      const text = await rs.text();
      throw new Error(`${rs.status}: ${text || rs.statusText}`);
    }
    const contentType = rs.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError('Wrong content-type');
    }
    return await rs.json();
  }
</script>

<script lang="ts">
  import { Tab, TabList, TabPanel, Tabs } from '@apsc/tabs';
  import { HighlightSvelte } from 'svelte-highlight';

  const spinnerClass = `w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin`;

  let tabsRef: Tabs | undefined = undefined;
  let authorList: Promise<Author[]> | undefined = undefined;
  let authorInSelect: Author | undefined = undefined;
  let authorTabs: Author[] = [];
  let quotes: Promise<Quote[]>[] = [];

  function addAuthorTab(author: Author | undefined): boolean {
    if (author != null && !authorTabs.includes(author)) {
      authorTabs = [author, ...authorTabs];
      quotes = [fetchQuotes(author.name), ...quotes];
      tabsRef?.selectTab(0);
      return true;
    }
    return false;
  }

  function rmAuthorTab(index: number) {
    if (index >= 0 && index < authorTabs.length) {
      authorTabs = [...authorTabs.slice(0, index), ...authorTabs.slice(index + 1)];
      quotes = [...quotes.slice(0, index), ...quotes.slice(index + 1)];
    }
  }
</script>

<section class="prose max-w-none my-4">
  <div class="mb-4 text-center">
    Example of vertical tab layout. Thanks to the authors of <a
      target="_blank"
      href="https://github.com/skolakoda">Škola koda</a
    >
    for the useful and convenient
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api">API</a>
  </div>

  <div class="flex items-center justify-center gap-2">
    {#if authorList == null}
      <button
        class="input"
        on:click={() => {
          authorList = fetchAuthors();
        }}>Request authors</button
      >
    {:else}
      {#await authorList}
        <div class="text-blue-800 {spinnerClass}" />
        <div class="text-blue-800">Loading authors...</div>
      {:then authors}
        <div>
          <select class="input" bind:value={authorInSelect}>
            <option value={undefined} hidden>Select author</option>
            {#each authors as a}
              <option value={a} disabled={authorTabs.includes(a)}>{a.name}: {a.quoteCount}</option>
            {/each}
          </select>
          <button
            class="input"
            disabled={authorInSelect == null}
            on:click={() => (addAuthorTab(authorInSelect) ? (authorInSelect = undefined) : void 0)}
            >Get quotes</button
          >
        </div>
      {:catch error}
        <div class="text-red-400">
          Loading authors error: <strong class="text-red-600"
            >{error instanceof Error ? error.message : error}</strong
          >
        </div>
      {/await}
    {/if}
  </div>
  {#if authorTabs.length}
    <Tabs class="my-4 py-4 border-y border-gray-300" bind:this={tabsRef}>
      <TabList class="basis-[24ch] shrink-0">
        {#each authorTabs as a, i}
          <Tab class="flex items-center gap-2">
            <button
              class="text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"
              on:click={() => rmAuthorTab(i)}>&times;</button
            >
            <span
              class="grow text-left overflow-hidden text-ellipsis whitespace-nowrap"
              title={a.name}>{a.name}</span
            >
            <span class="text-xs px-1 rounded-md bg-gray-600 text-white font-bold"
              >{a.quoteCount}</span
            >
          </Tab>
        {/each}
      </TabList>
      <div class="grow">
        {#each quotes as p}
          <TabPanel class="px-4">
            {#await p}
              <div class="h-full flex items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="text-blue-800 w-12 h-12 {spinnerClass}" />
                  <div class="text-blue-800">Loading quotes...</div>
                </div>
              </div>
            {:then qs}
              {#each qs as q}
                <div class="mb-2 last:mb-0 flex items-start">
                  <span class="text-gray-200 text-7xl font-bold leading-[75%] mr-2">&ldquo;</span>
                  <div class="grow">
                    <div class="mb-3 leading-6">{q.en}</div>
                    <div class="font-semibold italic text-right">{q.author}</div>
                  </div>
                </div>
              {/each}
            {:catch error}
              <div class="h-full flex items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="text-red-400">Loading quotes error</div>
                  <div>
                    <strong class="text-red-600"
                      >{error instanceof Error ? error.message : error}</strong
                    >
                  </div>
                </div>
              </div>
            {/await}
          </TabPanel>
        {/each}
      </div>
    </Tabs>
  {/if}

  <h3>Code</h3>
  <HighlightSvelte
    code={`<${'script lang="ts"'}>
  let tabsRef: Tabs | undefined = undefined;
  let authorList: Promise<Author[]> | undefined = undefined;
  let authorInSelect: Author | undefined = undefined;
  let authorTabs: Author[] = [];
  let quotes: Promise<Quote[]>[] = [];
</script>

<section class="prose max-w-none my-4">
  <div class="flex items-center justify-center gap-2">
    {#if authorList == null}
      <button
        class="input"
        on:click={() => {
          authorList = fetchAuthors();
        }}>Request authors</button
      >
    {:else}
      {#await authorList}
        <div class="text-blue-800 {spinnerClass}" />
        <div class="text-blue-800">Loading authors...</div>
      {:then authors}
        <div>
          <select class="input" bind:value={authorInSelect}>
            <option value={undefined} hidden>Select author</option>
            {#each authors as a}
              <option value={a} disabled={authorTabs.includes(a)}>{a.name}: {a.quoteCount}</option>
            {/each}
          </select>
          <button
            class="input"
            disabled={authorInSelect == null}
            on:click={() => (addAuthorTab(authorInSelect) ? (authorInSelect = undefined) : void 0)}
            >Get quotes</button
          >
        </div>
      {:catch error}
        <div class="text-red-400">
          Loading authors error: <strong class="text-red-600"
            >{error instanceof Error ? error.message : error}</strong
          >
        </div>
      {/await}
    {/if}
  </div>
  {#if authorTabs.length}
    <Tabs class="my-4 py-4 border-y border-gray-300" bind:this={tabsRef}>
      <TabList class="basis-[24ch] shrink-0">
        {#each authorTabs as a, i}
          <Tab class="flex items-center gap-2">
            <button
              class="text-xl p-1 leading-3 rounded-full hover:bg-gray-500 hover:text-white"
              on:click={() => rmAuthorTab(i)}>&times;</button
            >
            <span
              class="grow text-left overflow-hidden text-ellipsis whitespace-nowrap"
              title={a.name}>{a.name}</span
            >
            <span class="text-xs px-1 rounded-md bg-gray-600 text-white font-bold"
              >{a.quoteCount}</span
            >
          </Tab>
        {/each}
      </TabList>
      <div class="grow">
        {#each quotes as p}
          <TabPanel class="px-4">
            {#await p}
              <div class="h-full flex items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="text-blue-800 w-12 h-12 {spinnerClass}" />
                  <div class="text-blue-800">Loading quotes...</div>
                </div>
              </div>
            {:then qs}
              {#each qs as q}
                <div class="mb-2 last:mb-0 flex items-start">
                  <span class="text-gray-200 text-7xl font-bold leading-[75%] mr-2">&ldquo;</span>
                  <div class="grow">
                    <div class="mb-3 leading-6">{q.en}</div>
                    <div class="font-semibold italic text-right">{q.author}</div>
                  </div>
                </div>
              {/each}
            {:catch error}
              <div class="h-full flex items-center justify-center">
                <div class="flex flex-col items-center">
                  <div class="text-red-400">Loading quotes error</div>
                  <div>
                    <strong class="text-red-600"
                      >{error instanceof Error ? error.message : error}</strong
                    >
                  </div>
                </div>
              </div>
            {/await}
          </TabPanel>
        {/each}
      </div>
    </Tabs>
  {/if}
</section>

<${'style lang="postcss"'}>
  section :global(.c-tabs) {
    @apply flex items-start;
  }

  section :global(.c-tabs__tablist) {
    @apply flex flex-col border-none;
  }

  section :global(.c-tabs__tab) {
    @apply pl-1 border-none rounded-sm;
  }

  section :global(.c-tabs__tablist),
  section :global(.c-tabs__tabpanel) {
    @apply h-[32em] overflow-y-auto;
  }
</style>`}
  />
</section>

<style lang="postcss">
  section :global(.c-tabs) {
    @apply flex items-start;
  }

  section :global(.c-tabs__tablist) {
    @apply flex flex-col border-none;
  }

  section :global(.c-tabs__tab) {
    @apply pl-1 border-none rounded-sm;
  }

  section :global(.c-tabs__tablist),
  section :global(.c-tabs__tabpanel) {
    @apply h-[32em] overflow-y-auto;
  }
</style>
