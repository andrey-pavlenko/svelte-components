import { type Readable } from 'svelte/store';
export interface ContextActive {
  index: number;
  tab?: symbol;
  panel?: symbol;
}
export type ActivateItem = () => void;
export declare class TabsContext {
  protected _tabs: symbol[];
  protected _panels: symbol[];
  protected _setLength: ((value: number) => void) | null;
  protected _setActive: ((value: ContextActive) => void) | null;
  protected _active: ContextActive;
  readonly active: Readable<ContextActive>;
  readonly length: Readable<number>;
  static readonly contextName: symbol;
  constructor();
  protected _getLength(): number;
  push(entity: 'tab' | 'panel'): symbol;
  pop(
    entity:
      | {
          tab: symbol;
        }
      | {
          panel: symbol;
        }
  ): boolean;
  select(
    entity:
      | number
      | {
          tab: symbol;
        }
      | {
          panel: symbol;
        }
  ): boolean;
}
