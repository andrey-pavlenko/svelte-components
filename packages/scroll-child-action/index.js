/**
 * Scrolls el into parent viewport vertically.
 * Returns true if scrolling has been performed.
 */
export function scrollChildIntoParentVertical(el) {
    const parent = el.parentElement;
    if (parent && parent.offsetHeight > parent.clientHeight) {
        const style = getComputedStyle(parent);
        const parentPaddingTop = parseInt(style.paddingTop) || 0;
        const parentPaddingBottom = parseInt(style.paddingBottom) || 0;
        const parentTop = parent.offsetTop + parentPaddingTop;
        const parentBottom = parent.offsetTop + parent.offsetHeight - parentPaddingBottom;
        const elTop = el.offsetTop - parent.scrollTop;
        const elBottom = el.offsetTop + el.offsetHeight - parent.scrollTop;
        if (elBottom > parentBottom) {
            parent.scrollTop += elBottom - parentBottom;
            return true;
        }
        else if (elTop < parentTop) {
            parent.scrollTop -= parentTop - elTop;
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
/**
 * Scrolls el into parent viewport horizontally.
 * Returns true if scrolling has been performed.
 */
export function scrollChildIntoParentHorizontal(el) {
    const parent = el.parentElement;
    if (parent && parent.offsetWidth > parent.clientWidth) {
        const style = getComputedStyle(parent);
        const parentPaddingLeft = parseInt(style.paddingLeft) || 0;
        const parentPaddingRight = parseInt(style.paddingRight) || 0;
        const parentLeft = parent.offsetLeft + parentPaddingLeft;
        const parentRight = parent.offsetLeft + parent.offsetWidth - parentPaddingRight;
        const elLeft = el.offsetLeft - parent.scrollLeft;
        const elRight = el.offsetLeft + el.offsetWidth - parent.scrollLeft;
        if (elRight > parentRight) {
            parent.scrollLeft += elRight - parentRight;
            return true;
        }
        else if (elLeft < parentLeft) {
            parent.scrollLeft -= parentLeft - elLeft;
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
export default function useScrollChild(node, options) {
    function scroll(options) {
        if (options === true) {
            scrollChildIntoParentVertical(node);
            scrollChildIntoParentHorizontal(node);
        }
        else if (typeof options === 'object') {
            if (options.x) {
                scrollChildIntoParentHorizontal(node);
            }
            if (options.y) {
                scrollChildIntoParentVertical(node);
            }
        }
    }
    scroll(options);
    return {
        update(options) {
            scroll(options);
        }
    };
}
