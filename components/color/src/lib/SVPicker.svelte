<script lang="ts">
  import { clamp } from './utils';

  export let s = 0;
  export let v = 0;
  // export let picking = false;

  function actionPick(node: HTMLElement) {
    function updateXY(event: MouseEvent | TouchEvent) {
      const { pageX, pageY } = event instanceof MouseEvent ? event : event.changedTouches[0];
      const { left, top, width, height } = node.getBoundingClientRect();
      s = clamp((pageX - left - window.scrollX) / width, 0, 1) * 100;
      v = 100 - clamp((pageY - top - window.scrollY) / height, 0, 1) * 100;
    }

    function handlePickMove(event: MouseEvent | TouchEvent) {
      updateXY(event);
    }

    function handlePickUp() {
      // picking = false;
      document.removeEventListener('mousemove', handlePickMove);
      document.removeEventListener('touchmove', handlePickMove);
      document.removeEventListener('mouseup', handlePickUp);
      document.removeEventListener('touchend', handlePickUp);
      setTimeout(() => {
        document.removeEventListener('click', preventClick, { capture: true });
      }, 0);
    }

    function handlePickDown(event: MouseEvent | TouchEvent) {
      // picking = true;
      node.focus();
      document.addEventListener('mousemove', handlePickMove);
      document.addEventListener('touchmove', handlePickMove);
      document.addEventListener('mouseup', handlePickUp);
      document.addEventListener('touchend', handlePickUp);
      document.addEventListener('click', preventClick, { capture: true });
      updateXY(event);
      event.preventDefault();
    }

    function preventClick(event: Event) {
      event.preventDefault();
      event.stopPropagation();
    }

    function handleKeyboardMove(event: KeyboardEvent) {
      const step = 1;
      let y = 100 - v;
      let x = s;
      switch (event.code) {
        case 'ArrowUp':
          y = clamp(y - step, 0, 100);
          break;
        case 'ArrowDown':
          y = clamp(y + step, 0, 100);
          event.preventDefault();
          break;
        case 'ArrowLeft':
          x = clamp(x - step, 0, 100);
          event.preventDefault();
          break;
        case 'ArrowRight':
          x = clamp(x + step, 0, 100);
          event.preventDefault();
          break;
      }
      if (x !== s) {
        s = x;
      }
      if (100 - y !== v) {
        v = 100 - y;
      }
    }

    node.addEventListener('mousedown', handlePickDown);
    node.addEventListener('touchstart', handlePickDown);
    node.addEventListener('keydown', handleKeyboardMove);

    return {
      destroy() {
        handlePickUp();
        node.removeEventListener('mousedown', handlePickDown);
        node.removeEventListener('touchstart', handlePickDown);
        node.removeEventListener('keydown', handleKeyboardMove);
      }
    };
  }
</script>

<div class="c-color-picker__tone" tabindex="0" use:actionPick>
  <div class="c-color-picker__tone--marker" style="left: {s}%; top: {100 - v}%" />
</div>
