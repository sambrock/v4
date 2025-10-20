<script lang="ts">
  let container: HTMLDivElement;

  let cx = 0;
  let cy = 0;

  const handleMouseMove = (e: MouseEvent) => {
    container?.classList.add('cursor-shine');
    cx = Math.floor(e.clientX - container?.getBoundingClientRect().left);
    cy = Math.floor(e.clientY - container?.getBoundingClientRect().top);
  };

  const handleMouseLeave = () => {
    container?.classList.remove('cursor-shine');
  };

  $: {
    container?.style.setProperty('--cursor-y', `${cy}px`);
    container?.style.setProperty('--cursor-x', `${cx}px`);
  }
</script>

<div
  bind:this={container}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  class="relative rounded-xl"
  role="presentation"
>
  <slot />
</div>
