import { setOptions, toString } from 'keyboard-event-to-string';
setOptions({ joinWith: '+' });
/**
 * Action for `use` directive.
 *
 * @example
 * <div use:useKeyboardShortcut={{ event: 'keydown', preventDefault: true, fns: {
 * ArrowUp: () => (active = active - 1),
 * ArrowDown: () => (active = active + 1)}}>...</div>
 *
 * The function attaches a handler to the corresponding event `options.event` with parameters
 * - `capture`: default `false`
 * - `passive`: default `false`
 *
 * The handler converts event to shortcut using package [`keyboard-event-to-string`](https://www.npmjs.com/package/keyboard-event-to-string).
 *
 * If function `options.fns[shortcut]` exists then handler executes
 * - `event.preventDefault()` if `options.preventDefault == true`
 * - `event.stopPropagation()` if `options.stopPropagation == true`
 * - `event.stopImmediatePropagation()` if `options.stopImmediatePropagation == true`
 *
 * After it calls `options.fns[shortcut](event)`.
 *
 * Note! The action modifies [global options](https://github.com/ndp-software/keyboard-event-to-string#options)
 * ```js
 * setOptions({ joinWith: '+' });
 * ```
 * Therefore, the shortcut obtained in the action are `Ctrl+A` instead `Ctrl + A`.
 *
 *
 * @param {HTMLElement} node
 * @param {{
 * event: 'keypress' | 'keydown' | 'keyup';
 * capture?: boolean;
 * passive?: boolean;
 * preventDefault?: boolean;
 * stopPropagation?: boolean;
 * stopImmediatePropagation?: boolean;
 * fns: Record<string, (event: KeyboardEvent) => void>;
 * }} options
 */
function useKeyboardShortcut(node, options) {
  let {
    event,
    capture = false,
    passive = false,
    preventDefault = false,
    stopImmediatePropagation = false,
    stopPropagation = false,
    fns
  } = options;
  function handleEvent(event) {
    const fnKey = toString(event);
    if (typeof fns[fnKey] === 'function') {
      if (preventDefault) {
        event.preventDefault();
      }
      if (stopPropagation) {
        event.stopPropagation();
      }
      if (stopImmediatePropagation) {
        event.stopImmediatePropagation();
      }
      fns[fnKey](event);
    }
  }
  node.addEventListener(event, handleEvent, { capture, passive });
  return {
    destroy() {
      node.removeEventListener(event, handleEvent, { capture });
    },
    update(options) {
      const updateListener =
        event !== options.event || capture !== options.capture || passive !== options.passive;
      if (updateListener) {
        node.removeEventListener(event, handleEvent, { capture });
      }
      ({
        event,
        capture = false,
        passive = false,
        preventDefault = false,
        stopImmediatePropagation = false,
        stopPropagation = false,
        fns
      } = options);
      if (updateListener) {
        node.addEventListener(event, handleEvent, { capture, passive });
      }
    }
  };
}
export default useKeyboardShortcut;
