import { computePosition, autoUpdate } from '@floating-ui/dom';
import type { Action, ActionReturn } from 'svelte/types/runtime/action';
import type {
  ReferenceElement,
  FloatingElement,
  ComputePositionConfig,
  AutoUpdateOptions,
  ComputePositionReturn
} from '@floating-ui/dom';

export type UpdateOptions = Partial<AutoUpdateOptions> | boolean;

export type FloatingOptions = Partial<
  ComputePositionConfig & {
    callback: (
      p: ComputePositionReturn,
      e: { reference: ReferenceElement; floating: FloatingElement }
    ) => void;
  }
>;

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
 * <div use:useFloat={{
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
export default function createFloatingUiAction(
  options: UpdateOptions
): [Action, Action, (options: UpdateOptions) => void] {
  const autoupdate: {
    enable: boolean;
    options: Partial<AutoUpdateOptions> | undefined;
    cleanup: ReturnType<typeof autoUpdate> | null;
  } = {
    enable: false,
    options: undefined,
    cleanup: null
  };

  const elements: {
    reference: ReferenceElement | null;
    floating: FloatingElement | null;
    options: FloatingOptions | undefined;
  } = {
    reference: null,
    floating: null,
    options: undefined
  };

  setAutoupdate(options);

  function setAutoupdate(options: UpdateOptions) {
    if (options === true) {
      autoupdate.enable = true;
      startAutoupdate();
    } else if (options === false) {
      stopAutoupdate();
      autoupdate.enable = false;
    } else {
      startAutoupdate();
      autoupdate.enable = true;
      autoupdate.options = options;
    }
  }

  function startAutoupdate() {
    stopAutoupdate();
    if (elements.reference && elements.floating && autoupdate.enable) {
      autoupdate.cleanup = autoUpdate(
        elements.reference,
        elements.floating,
        _computeposition,
        autoupdate.options
      );
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

  function useReference(node: ReferenceElement): ActionReturn {
    elements.reference = node;
    if (autoupdate.enable) {
      startAutoupdate();
    } else {
      _computeposition();
    }
    return {
      destroy() {
        stopAutoupdate();
        elements.reference = null;
      }
    };
  }

  function useFloating(node: FloatingElement, options?: FloatingOptions): ActionReturn {
    elements.floating = node;
    elements.options = options;
    if (autoupdate.enable) {
      startAutoupdate();
    } else {
      _computeposition();
    }
    return {
      update(options?: FloatingOptions) {
        stopAutoupdate();
        elements.options = options;
        if (autoupdate.enable) {
          startAutoupdate();
        } else {
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
