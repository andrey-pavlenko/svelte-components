import { TabsContext, type ContextActive } from '$lib/tabs-context';
import { describe, expect, it } from 'vitest';

describe('create-tabs-context', () => {
  describe('push', () => {
    it('push all tabs then all panels', () => {
      const context = new TabsContext();

      let active: ContextActive = { index: NaN };
      context.active.subscribe((state) => (active = state));
      let length = 0;
      context.length.subscribe((value) => (length = value));

      // --- pushing tabs
      let id = context.push('tab');
      expect(length).toBe(1);
      expect(active).toEqual({ index: 0, tab: id } as ContextActive);

      id = context.push('tab');
      expect(length).toBe(2);
      expect(active).toEqual({ index: 0, tab: expect.any(Symbol) } as ContextActive);
      expect(active.tab).not.toBe(id);

      id = context.push('tab');
      expect(length).toBe(3);
      expect(active).toEqual({ index: 0, tab: expect.any(Symbol) } as ContextActive);
      expect(active.tab).not.toBe(id);

      // --- pushing panels
      id = context.push('panel');
      expect(length).toBe(3);
      expect(active).toEqual({ index: 0, tab: expect.any(Symbol), panel: id } as ContextActive);

      id = context.push('panel');
      expect(length).toBe(3);
      expect(active).toEqual({
        index: 0,
        tab: expect.any(Symbol),
        panel: expect.any(Symbol)
      } as ContextActive);
      expect(active.panel).not.toBe(id);

      id = context.push('panel');
      expect(length).toBe(3);
      expect(active).toEqual({
        index: 0,
        tab: expect.any(Symbol),
        panel: expect.any(Symbol)
      } as ContextActive);
      expect(active.panel).not.toBe(id);
    });

    it('push all panels then all tabs', () => {
      const context = new TabsContext();

      let active: ContextActive = { index: NaN };
      context.active.subscribe((state) => (active = state));
      let length = 0;
      context.length.subscribe((value) => (length = value));

      // --- pushing panels
      let id = context.push('panel');
      expect(length).toBe(1);
      expect(active).toEqual({ index: 0, panel: id } as ContextActive);

      id = context.push('panel');
      expect(length).toBe(2);
      expect(active).toEqual({
        index: 0,
        panel: expect.any(Symbol)
      } as ContextActive);
      expect(active.panel).not.toBe(id);

      id = context.push('panel');
      expect(length).toBe(3);
      expect(active).toEqual({
        index: 0,
        panel: expect.any(Symbol)
      } as ContextActive);
      expect(active.panel).not.toBe(id);

      // --- pushing tabs
      id = context.push('tab');
      expect(length).toBe(3);
      expect(active).toEqual({ index: 0, tab: id, panel: expect.any(Symbol) } as ContextActive);

      id = context.push('tab');
      expect(length).toBe(3);
      expect(active).toEqual({
        index: 0,
        tab: expect.any(Symbol),
        panel: expect.any(Symbol)
      } as ContextActive);
      expect(active.tab).not.toBe(id);

      id = context.push('tab');
      expect(length).toBe(3);
      expect(active).toEqual({
        index: 0,
        tab: expect.any(Symbol),
        panel: expect.any(Symbol)
      } as ContextActive);
      expect(active.tab).not.toBe(id);
    });
  });

  describe('select', () => {
    it('select by number', () => {
      const context = new TabsContext();
      let active: ContextActive = { index: NaN };
      context.active.subscribe((state) => (active = state));
      let length = 0;
      context.length.subscribe((value) => (length = value));

      const tabs = [...Array(5).keys()].map(() => context.push('tab'));
      const panels = [...Array(5).keys()].map(() => context.push('panel'));

      expect(length).toBe(5);
      expect(active).toEqual({ index: 0, tab: tabs[0], panel: panels[0] } as ContextActive);
      for (const index of [1, 2, 3, 0, 4, 2]) {
        expect(context.select(index)).toBeTruthy();
        expect(active).toEqual({ index, tab: tabs[index], panel: panels[index] } as ContextActive);
      }
      const activeState = active;
      // --- missing
      expect(context.select(10)).toBeFalsy();
      expect(active).toBe(activeState);
      expect(context.select(-1)).toBeFalsy();
      expect(active).toBe(activeState);
      // --- select none
      expect(context.select(NaN)).toBeTruthy();
      expect(active).toEqual({ index: NaN } as ContextActive);
    });

    it('select by symbol', () => {
      const context = new TabsContext();
      let active: ContextActive = { index: NaN };
      context.active.subscribe((state) => (active = state));
      let length = 0;
      context.length.subscribe((value) => (length = value));

      const panels = [...Array(5).keys()].map(() => context.push('panel'));
      const tabs = [...Array(5).keys()].map(() => context.push('tab'));

      expect(length).toBe(5);
      expect(active).toEqual({ index: 0, tab: tabs[0], panel: panels[0] } as ContextActive);

      // --- select by tab
      for (const index of [1, 2, 3, 0, 4, 2]) {
        const tab = tabs[index];
        expect(context.select({ tab })).toBeTruthy();
        expect(active).toEqual({ index, tab: tabs[index], panel: panels[index] } as ContextActive);
      }
      // --- missing
      let activeState = active;
      expect(context.select({ tab: Symbol() })).toBeFalsy();
      expect(active).toBe(activeState);

      // --- select by panel
      for (const index of [1, 2, 3, 0, 4, 2]) {
        const panel = panels[index];
        expect(context.select({ panel })).toBeTruthy();
        expect(active).toEqual({ index, tab: tabs[index], panel: panels[index] } as ContextActive);
      }
      // --- missing
      activeState = active;
      expect(context.select({ panel: Symbol() })).toBeFalsy();
      expect(active).toBe(activeState);
    });
  });

  it('unsubscribe', () => {
    const context = new TabsContext();
    let active: ContextActive = { index: NaN };
    const unsubscribeActive = context.active.subscribe((state) => (active = state));
    let length = 0;
    const unsubscribeLength = context.length.subscribe((value) => (length = value));

    [...Array(5).keys()].map(() => context.push('panel'));
    [...Array(5).keys()].map(() => context.push('tab'));

    expect(active.index).toBe(0);
    expect(length).toBe(5);
    unsubscribeLength();
    context.push('tab');
    context.push('panel');
    expect(length).toBe(5);
    context.select(5);
    expect(active).toEqual({
      index: 5,
      tab: expect.any(Symbol),
      panel: expect.any(Symbol)
    } as ContextActive);
    unsubscribeActive();
    context.select(3);
    expect(active).toEqual({
      index: 5,
      tab: expect.any(Symbol),
      panel: expect.any(Symbol)
    } as ContextActive);
  });

  describe('pop', () => {
    it('pop one by one', () => {
      const context = new TabsContext();
      let active: ContextActive = { index: NaN };
      context.active.subscribe((state) => (active = state));
      let length = 0;
      context.length.subscribe((value) => (length = value));

      const tabs = [...Array(5).keys()].map(() => context.push('tab'));
      const panels = [...Array(5).keys()].map(() => context.push('panel'));

      expect(length).toBe(5);
      expect(active).toEqual({ index: 0, tab: tabs[0], panel: panels[0] } as ContextActive);

      // [ s,s,s,s,s ]
      expect(context.pop({ tab: tabs[2] })).toBeTruthy();
      expect(length).toBe(5);
      expect(active).toEqual({ index: 0, tab: tabs[0], panel: panels[0] } as ContextActive);
      expect(context.pop({ panel: panels[2] })).toBeTruthy();
      expect(length).toBe(4);
      expect(active).toEqual({ index: 0, tab: tabs[0], panel: panels[0] } as ContextActive);

      // [ s,s,-,s,s ]
      context.select(2);
      expect(active).toEqual({ index: 2, tab: tabs[3], panel: panels[3] } as ContextActive);
      expect(context.pop({ tab: tabs[3] })).toBeTruthy();
      expect(length).toBe(4);
      expect(active).toEqual({ index: 2, tab: tabs[4], panel: panels[3] } as ContextActive);
      expect(context.pop({ panel: panels[3] })).toBeTruthy();
      expect(active).toEqual({ index: 2, tab: tabs[4], panel: panels[4] } as ContextActive);
      expect(length).toBe(3);

      // [ s,s,-,-,s ]
      context.select({ tab: tabs.at(-1) as symbol });
      expect(active).toEqual({ index: 2, tab: tabs[4], panel: panels[4] } as ContextActive);
      expect(context.pop({ tab: tabs[4] })).toBeTruthy();
      expect(length).toBe(3);
      expect(active).toEqual({ index: 2, panel: panels[4] } as ContextActive);
      expect(context.pop({ panel: panels[4] })).toBeTruthy();
      expect(length).toBe(2);
      expect(active).toEqual({ index: 1, tab: tabs[1], panel: panels[1] } as ContextActive);

      // [ s,s,-,-,- ]
      context.select(1);
      expect(active).toEqual({ index: 1, tab: tabs[1], panel: panels[1] } as ContextActive);
      expect(context.pop({ tab: tabs[1] })).toBeTruthy();
      expect(length).toBe(2);
      expect(active).toEqual({ index: 1, panel: panels[1] } as ContextActive);
      expect(context.pop({ panel: panels[1] })).toBeTruthy();
      expect(active).toEqual({ index: 0, tab: tabs[0], panel: panels[0] } as ContextActive);
      expect(length).toBe(1);

      // [ s,-,-,-,- ]
      expect(context.pop({ tab: tabs[0] })).toBeTruthy();
      expect(length).toBe(1);
      expect(active).toEqual({ index: 0, panel: panels[0] } as ContextActive);
      expect(context.pop({ panel: panels[0] })).toBeTruthy();
      expect(length).toBe(0);
      expect(active).toEqual({ index: NaN } as ContextActive);
    });

    it('pop all tabs, then all panels', () => {
      const context = new TabsContext();
      let active: ContextActive = { index: NaN };
      context.active.subscribe((state) => (active = state));
      let length = 0;
      context.length.subscribe((value) => (length = value));

      let tabs = [...Array(5).keys()].map(() => context.push('tab'));
      let panels = [...Array(5).keys()].map(() => context.push('panel'));

      // --- from end
      expect(context.select({ tab: tabs[4] })).toBeTruthy();
      expect(length).toBe(5);
      expect(active).toEqual({ index: 4, tab: tabs[4], panel: panels[4] } as ContextActive);
      // --- pop all tabs
      for (const tab of tabs) {
        expect(context.pop({ tab })).toBeTruthy();
        expect(length).toBe(5);
        expect(active).toEqual({ index: 4, panel: panels[4] } as ContextActive);
      }
      // --- pop all panels
      for (const [index, panel] of panels.entries()) {
        expect(context.pop({ panel })).toBeTruthy();
        expect(length).toBe(5 - index - 1);
        if (index === 4) {
          expect(active).toEqual({ index: NaN } as ContextActive);
        } else {
          expect(active).toEqual({ index: 4 - index - 1, panel: panels[4] } as ContextActive);
        }
      }

      // --- from start
      tabs = [...Array(5).keys()].map(() => context.push('tab'));
      panels = [...Array(5).keys()].map(() => context.push('panel'));
      expect(length).toBe(5);
      expect(active).toEqual({ index: 0, tab: tabs[0], panel: panels[0] } as ContextActive);
      // --- pop all tabs
      for (const [index, tab] of tabs.entries()) {
        expect(context.pop({ tab })).toBeTruthy();
        expect(length).toBe(5);
        expect(active).toEqual({
          index: 0,
          tab: tabs[index + 1],
          panel: panels[0]
        } as ContextActive);
      }
      // --- pop all panels
      for (const [index, panel] of panels.entries()) {
        expect(context.pop({ panel })).toBeTruthy();
        expect(length).toBe(5 - index - 1);
        if (index === 4) {
          expect(active).toEqual({ index: NaN } as ContextActive);
        } else {
          expect(active).toEqual({ index: 0, panel: panels[index + 1] } as ContextActive);
        }
      }
    });

    it('pop all panels, then all tabs', () => {
      const context = new TabsContext();
      let active: ContextActive = { index: NaN };
      context.active.subscribe((state) => (active = state));
      let length = 0;
      context.length.subscribe((value) => (length = value));

      let tabs = [...Array(5).keys()].map(() => context.push('tab'));
      let panels = [...Array(5).keys()].map(() => context.push('panel'));

      // --- from end
      expect(context.select({ tab: tabs[4] })).toBeTruthy();
      expect(length).toBe(5);
      expect(active).toEqual({ index: 4, tab: tabs[4], panel: panels[4] } as ContextActive);
      // --- pop all panels
      for (const panel of panels) {
        expect(context.pop({ panel })).toBeTruthy();
        expect(length).toBe(5);
        expect(active).toEqual({ index: 4, tab: tabs[4] } as ContextActive);
      }
      // --- pop all tabs
      for (const [index, tab] of tabs.entries()) {
        expect(context.pop({ tab })).toBeTruthy();
        expect(length).toBe(5 - index - 1);
        if (index === 4) {
          expect(active).toEqual({ index: NaN } as ContextActive);
        } else {
          expect(active).toEqual({ index: 4 - index - 1, tab: tabs[4] } as ContextActive);
        }
      }

      // --- from start
      tabs = [...Array(5).keys()].map(() => context.push('tab'));
      panels = [...Array(5).keys()].map(() => context.push('panel'));
      expect(length).toBe(5);
      expect(active).toEqual({ index: 0, tab: tabs[0], panel: panels[0] } as ContextActive);
      // --- pop all panels
      for (const [index, panel] of panels.entries()) {
        expect(context.pop({ panel })).toBeTruthy();
        expect(length).toBe(5);
        expect(active).toEqual({
          index: 0,
          tab: tabs[0],
          panel: panels[index + 1]
        } as ContextActive);
      }
      // --- pop all tabs
      for (const [index, tab] of tabs.entries()) {
        expect(context.pop({ tab })).toBeTruthy();
        expect(length).toBe(5 - index - 1);
        if (index === 4) {
          expect(active).toEqual({ index: NaN } as ContextActive);
        } else {
          expect(active).toEqual({ index: 0, tab: tabs[index + 1] } as ContextActive);
        }
      }
    });

    it('pop missing', () => {
      const context = new TabsContext();
      let active: ContextActive = { index: NaN };
      context.active.subscribe((state) => (active = state));
      let length = 0;
      context.length.subscribe((value) => (length = value));

      [...Array(5).keys()].map(() => context.push('tab'));
      [...Array(5).keys()].map(() => context.push('panel'));

      expect(length).toBe(5);
      expect(active).toEqual({
        index: 0,
        tab: expect.any(Symbol),
        panel: expect.any(Symbol)
      } as ContextActive);

      const activeState = active;
      expect(context.pop({ tab: Symbol() })).toBeFalsy();
      expect(active).toBe(activeState);
      expect(context.pop({ panel: Symbol() })).toBeFalsy();
      expect(active).toBe(activeState);
    });
  });
});
