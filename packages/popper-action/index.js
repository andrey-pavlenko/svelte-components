import { createPopper } from '@popperjs/core';
export default function createPopperAction() {
    let reference = null;
    let popper = null;
    let opts = undefined;
    let instance = null;
    function createInstance() {
        if (reference && popper) {
            instance = createPopper(reference, popper, opts);
        }
    }
    function getInstance() {
        return instance;
    }
    function destroyInstance() {
        if (instance) {
            instance.destroy();
            instance = null;
        }
    }
    function useReference(node) {
        reference = node;
        createInstance();
        return {
            destroy() {
                reference = null;
                destroyInstance();
            }
        };
    }
    function usePopper(node, options) {
        popper = node;
        opts = options;
        createInstance();
        return {
            update(newOpts) {
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
