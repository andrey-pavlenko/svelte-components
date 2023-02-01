import type { ActionReturn } from 'svelte/types/runtime/action';
export type CallbackFn = (event: FocusEvent) => void;
/**
 * Executes callbacks when the node or its children gain or lose focus.
 * Ensure the `node` or its children can be focused {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus}
 *
 * @example
 * let focused = false;
 * const focusFns = [() => (focused = true), () => (focused = false)];
 * <div class:focused use:useFocus={focusFns}>...</div>
 *
 * @param {HTMLElement} node -- `use:` attribute element
 * @param {[focusin, focusout]} parameters -- an array of two functions called when `node` or its children gain or lose focus
 */
export default function focusAction(
  node: HTMLElement,
  parameters?: CallbackFn[]
): ActionReturn<(CallbackFn | undefined)[] | undefined>;
