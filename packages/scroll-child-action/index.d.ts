/**
 * Scrolls el into parent viewport vertically.
 * Returns true if scrolling has been performed.
 */
export declare function scrollChildIntoParentVertical(el: HTMLElement): boolean;
/**
 * Scrolls el into parent viewport horizontally.
 * Returns true if scrolling has been performed.
 */
export declare function scrollChildIntoParentHorizontal(el: HTMLElement): boolean;
export declare type UseScrollChildOptions = boolean | {
    x?: boolean;
    y?: boolean;
};
export default function useScrollChild(node: HTMLElement, options: UseScrollChildOptions): {
    update(options: UseScrollChildOptions): void;
};
