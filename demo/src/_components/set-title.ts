import { onMount, onDestroy } from 'svelte';

export function setTitle(title: string) {
  const preTitle = document.title;
  onMount(() => (document.title = title));
  onDestroy(() => (document.title = preTitle));
}
