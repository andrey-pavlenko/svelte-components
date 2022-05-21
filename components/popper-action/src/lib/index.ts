import { createPopper } from '@popperjs/core';
import type { Instance, Options, VirtualElement } from '@popperjs/core';
import type { Action, ActionReturn } from 'svelte/types/runtime/action';

export default function createPopperAction(): [Action, Action, () => Instance | null] {
  let reference: Element | VirtualElement | null = null;
  let popper: HTMLElement | null = null;
  let opts: Options | undefined = undefined;
  let instance: Instance | null = null;

  function createInstance() {
    if (reference && popper) {
      instance = createPopper(reference, popper, opts);
    }
  }

  function getInstance(): Instance | null {
    return instance;
  }

  function destroyInstance() {
    if (instance) {
      instance.destroy();
      instance = null;
    }
  }

  function useReference(node: Element | VirtualElement): ActionReturn {
    reference = node;
    createInstance();
    return {
      destroy() {
        reference = null;
        destroyInstance();
      }
    };
  }

  function usePopper(node: HTMLElement, options?: Options): ActionReturn {
    popper = node;
    opts = options;
    createInstance();

    return {
      update(newOpts: Options) {
        opts = newOpts;
        instance?.setOptions(opts);
      },

      destroy() {
        popper = null;
        destroyInstance();
      }
    };
  }

  return [useReference, usePopper, getInstance];
}
