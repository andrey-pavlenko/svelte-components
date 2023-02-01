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
export default function focusAction(node, parameters) {
  let onFocusin = undefined;
  let onFocusout = undefined;
  [onFocusin, onFocusout] = parameters ?? [];
  function handleFocusin(event) {
    if (onFocusin && node.contains(event.target)) {
      onFocusin(event);
    }
  }
  function handleFocusout(event) {
    if (onFocusout && !node.contains(event.relatedTarget)) {
      onFocusout(event);
    }
  }
  node.addEventListener('focusin', handleFocusin);
  node.addEventListener('focusout', handleFocusout);
  return {
    update(parameters) {
      [onFocusin, onFocusout] = parameters ?? [];
    },
    destroy() {
      node.removeEventListener('focusout', handleFocusout);
      node.removeEventListener('focusin', handleFocusin);
    }
  };
}
