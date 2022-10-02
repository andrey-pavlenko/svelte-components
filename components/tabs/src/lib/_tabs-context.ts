import { readable, writable, type Readable, type Writable } from 'svelte/store';

export interface ContextActive {
  index: number;
  tab?: symbol;
  panel?: symbol;
}

export type ActivateItem = () => void;

const contextName = Symbol('TABS');

export class TabsContext {
  protected _tabs: symbol[] = [];
  protected _panels: symbol[] = [];
  protected _setLength: ((value: number) => void) | null = null;
  protected _setActive: ((value: ContextActive) => void) | null = null;
  protected _active: ContextActive = { index: NaN };
  readonly active: Readable<ContextActive>;
  readonly length: Readable<number>;
  readonly selected: Writable<number>;
  static readonly contextName = contextName;

  constructor() {
    this.active = readable<ContextActive>(this._active, (set) => {
      this._setActive = set;
      this._setActive(this._active);
      return () => {
        this._setActive = null;
      };
    });

    this.length = readable<number>(0, (set) => {
      this._setLength = set;
      this._setLength(this._getLength());
      return () => {
        this._setLength = null;
      };
    });

    this.selected = ((init) => {
      const { set, subscribe } = writable(init);
      return {
        set: (value) => {
          if (!Object.is(value, this._active.index)) {
            this.activate(value);
          }
          set(this._active.index);
        },
        subscribe,
        update: (updater) => {
          const value = updater(this._active.index);
          if (!Object.is(value, this._active.index)) {
            this.activate(value);
          }
          set(this._active.index);
        }
      };
    })(this._active.index);
  }

  protected _getLength() {
    return Math.max(this._tabs.length, this._panels.length);
  }

  push(entity: 'tab' | 'panel') {
    const item = Symbol(entity);
    (entity === 'tab' ? this._tabs : this._panels).push(item);
    this._setLength && this._setLength(this._getLength());
    if (isNaN(this._active.index) || this._active.tab == null || this._active.panel == null) {
      this.activate(this._active.index || 0);
    }
    return item;
  }

  pop(entity: { tab: symbol } | { panel: symbol }) {
    const remove = (list: symbol[], item: symbol) => {
      const index = list.indexOf(item);
      if (index < 0) {
        return false;
      }
      list.splice(index, 1);
      const length = this._getLength();
      this._setLength && this._setLength(length);
      if (length === 0) {
        this.activate(NaN);
      } else if (index <= this._active.index) {
        this.activate(Math.min(this._active.index, length - 1));
      }
      return true;
    };

    if ('tab' in entity) {
      return remove(this._tabs, entity.tab);
    }
    if ('panel' in entity) {
      return remove(this._panels, entity.panel);
    }
    return false;
  }

  activate(entity: number | { tab: symbol } | { panel: symbol }) {
    const getState = (index: number) => {
      let state = this._active;
      if (isNaN(index)) {
        state = { index: NaN };
      } else if (index >= 0 && index < this._getLength()) {
        state = { index };
        if (this._tabs[index]) {
          state.tab = this._tabs[index];
        }
        if (this._panels[index]) {
          state.panel = this._panels[index];
        }
      }
      return state;
    };

    const updateState = (state: ContextActive) => {
      if (!Object.is(this._active, state)) {
        this._active = state;
        this.selected.set(this._active.index);
        this._setActive && this._setActive(this._active);
        return true;
      }
      return false;
    };

    if (typeof entity === 'number') {
      return updateState(getState(entity));
    } else {
      if ('tab' in entity && entity.tab) {
        return updateState(getState(this._tabs.indexOf(entity.tab)));
      }
      if ('panel' in entity && entity.panel) {
        return updateState(getState(this._panels.indexOf(entity.panel)));
      }
    }
    return false;
  }
}
