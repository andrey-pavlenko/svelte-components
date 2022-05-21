import type { Instance } from '@popperjs/core';
import type { Action } from 'svelte/types/runtime/action';
export default function createPopperAction(): [Action, Action, () => Instance | null];
