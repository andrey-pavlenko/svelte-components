import type { Action } from 'svelte/types/runtime/action';
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
      e: {
        reference: ReferenceElement;
        floating: FloatingElement;
      }
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
): [Action, Action, (options: UpdateOptions) => void];
