<script lang="ts" context="module">
  import groupBy from 'lodash.groupby';
  const url = 'skolacoda-quotes.json';

  interface Author {
    name: string;
    quoteCount: number;
  }

  interface Quote {
    id: string;
    author: string;
    en: string;
  }

  const fetchDelay = 100;

  async function fetchQuotesJson(): Promise<Quote[]> {
    const rs = await fetch(url);
    if (rs.status >= 400) {
      const text = await rs.text();
      throw new Error(`${rs.status}: ${text || rs.statusText}`);
    }
    await new Promise((resolve) => setTimeout(resolve, fetchDelay));
    return rs.json();
  }

  async function fetchAuthors(): Promise<Author[]> {
    const authors = Object.entries(groupBy(await fetchQuotesJson(), 'author'))
      .reduce((a, [name, quotes]) => {
        a.push({ name, quoteCount: quotes.length });
        return a;
      }, [] as Author[])
      .sort((a, b) => a.name.localeCompare(b.name));
    await new Promise((resolve) => setTimeout(resolve, fetchDelay));
    return authors;
  }

  async function fetchQuotes(author: string): Promise<Quote[]> {
    return groupBy(await fetchQuotesJson(), 'author')[author] ?? [];
  }
</script>

<script lang="ts">
  import { Tab, Panel, Tabs } from '@apsc/tabs';

  const spinnerClass = `w-6 h-6 rounded-full border-4 border-t-current border-x-current animate-spin`;

  let authorList: Promise<Author[]> | undefined = undefined;
  let authorInSelect: Author | undefined = undefined;
  let authorTabs: Author[] = [];
  let quotes: Promise<Quote[]>[] = [];
  let selected = NaN;

  function addAuthorTab(author: Author | undefined): boolean {
    if (author != null && !authorTabs.includes(author)) {
      authorTabs = [author, ...authorTabs];
      quotes = [fetchQuotes(author.name), ...quotes];
      selected = 0;
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
  <div class="mb-4 text-center leading-5">
    Example of vertical tab layout. <small class="line-through"
      >Thanks to the authors of <a
        target="_blank"
        href="https://github.com/skolakoda"
        rel="noreferrer">Škola koda</a
      >
      for the useful and convenient
      <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer"
        >API</a
      ></small
    >. Now the API doesn't work. JSON from the project
    <a target="_blank" href="https://github.com/skolakoda/programming-quotes-api" rel="noreferrer"
      >Škola koda</a
    > is used
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
    <div class="my-4 py-4 border-y border-gray-300 flex items-start h-[25rem] overflow-hidden">
      <Tabs bind:selected>
        <div class="basis-[24ch] overflow-x-hidden shrink-0 h-full overflow-y-auto">
          {#each authorTabs as a, i}
            <Tab let:active let:activate>
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div class="tab" class:active on:click={activate}>
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
              </div>
            </Tab>
          {/each}
        </div>
        <div class="grow h-full">
          {#each quotes as p}
            <Panel let:active>
              <div class="px-4 overflow-y-auto h-full panel" class:active>
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
                      <span class="text-gray-200 text-7xl font-bold leading-[75%] mr-2"
                        >&ldquo;</span
                      >
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
              </div>
            </Panel>
          {/each}
        </div>
      </Tabs>
    </div>
  {/if}
</section>

<style lang="postcss">
  .tab {
    @apply flex items-center gap-2 pl-1 pr-2 py-1 rounded-md cursor-pointer;
  }
  .tab.active {
    @apply bg-gray-200 cursor-default;
  }
  .panel:not(.active) {
    display: none;
  }
</style>
