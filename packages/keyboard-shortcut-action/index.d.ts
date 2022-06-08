import type { ActionReturn } from 'svelte/types/runtime/action';
export interface UseKeyboardShortcutOptions {
    event: 'keypress' | 'keydown' | 'keyup';
    capture?: boolean;
    passive?: boolean;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    stopImmediatePropagation?: boolean;
    fns: Record<string, (event: KeyboardEvent) => void>;
}
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
declare function useKeyboardShortcut(node: HTMLElement, options: UseKeyboardShortcutOptions): ActionReturn;
export default useKeyboardShortcut;
