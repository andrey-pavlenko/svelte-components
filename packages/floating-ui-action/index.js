import { computePosition, autoUpdate } from '@floating-ui/dom';
/**
 * Creates actions for use in directive `use`. Returns an array of three functions `useReference`, `useFloating` and `setAutoupdate`.
 *
 * @example
 * const [useReference, useFloat, setAutoupdate] = createAction(true);
 *
 * Parameter `options` can take values
 * `true` -- `autoUpdate` will be enabled with default options
 * `object` -- `autoUpdate` will be enabled with the specified options
 * `false` -- `autoUpdate` will be disabled
 *
 * See {@link https://floating-ui.com/docs/autoUpdate autoUpdate}
 *
 * Use actions `useReference` and `useFloat` in directive `use` on target elements.
 *
 * @example
 * <button on:click={() => (show = !show)} use:useReference>Click me</button>
 *
 * @example
 * <div use:useFloat2={{
 *  placement: 'bottom',
 *  middleware: [offset(8), flip(), arrow({ element: arrow })],
 *  callback: positionFloat
 * }}
 * transition:scale|local>My tooltip</div>
 *
 * Action `useFloating` takes options as a function `computePosition` {@link https://floating-ui.com/docs/computePosition}
 * with optional `callback` for custom element control, e.g. an arrow.
 *
 * `setAutoupdate` allows disable, enable or change the `autoUpdate` {#link https://floating-ui.com/docs/autoUpdate} settings at any time.
 *
 * @param {UpdateOptions} options
 * @returns {[Action, Action, (options: UpdateOptions) => void]}
 */
export default function createFloatingUiAction(options) {
    const autoupdate = {
        enable: false,
        options: undefined,
        cleanup: null
    };
    const elements = {
        reference: null,
        floating: null,
        options: undefined
    };
    setAutoupdate(options);
    function setAutoupdate(options) {
        if (options === true) {
            autoupdate.enable = true;
            startAutoupdate();
        }
        else if (options === false) {
            stopAutoupdate();
            autoupdate.enable = false;
        }
        else {
            startAutoupdate();
            autoupdate.enable = true;
            autoupdate.options = options;
        }
    }
    function startAutoupdate() {
        stopAutoupdate();
        if (elements.reference && elements.floating && autoupdate.enable) {
            autoupdate.cleanup = autoUpdate(elements.reference, elements.floating, _computeposition, autoupdate.options);
        }
    }
    function stopAutoupdate() {
        if (autoupdate.cleanup != null) {
            autoupdate.cleanup();
            autoupdate.cleanup = null;
        }
    }
    async function _computeposition() {
        if (elements.reference && elements.floating) {
            const { reference, floating, options } = elements;
            const pos = await computePosition(reference, floating, options);
            Object.assign(floating.style, {
                position: pos.strategy,
                left: `${pos.x}px`,
                top: `${pos.y}px`
            });
            if (options?.callback) {
                options.callback(pos, { reference, floating });
            }
        }
    }
    function useReference(node) {
        elements.reference = node;
        if (autoupdate.enable) {
            startAutoupdate();
        }
        else {
            _computeposition();
        }
        return {
            destroy() {
                stopAutoupdate();
                elements.reference = null;
            }
        };
    }
    function useFloating(node, options) {
        elements.floating = node;
        elements.options = options;
        if (autoupdate.enable) {
            startAutoupdate();
        }
        else {
            _computeposition();
        }
        return {
            update(options) {
                stopAutoupdate();
                elements.options = options;
                if (autoupdate.enable) {
                    startAutoupdate();
                }
                else {
                    _computeposition();
                }
            },
            destroy() {
                stopAutoupdate();
                elements.floating = null;
                elements.options = undefined;
            }
        };
    }
    return [useReference, useFloating, setAutoupdate];
}
