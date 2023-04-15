<script lang="ts">
  let cx = 0;
  let cy = 0;

  const handleMouseMove = (e: MouseEvent) => {
    container?.classList.add('cursor-shine');
    cx = e.clientX - container?.getBoundingClientRect().left;
    cy = e.clientY - container?.getBoundingClientRect().top;
  };

  const handleMouseLeave = () => {
    container?.classList.remove('cursor-shine');
  };

  let container: HTMLDivElement;
  $: {
    container?.style.setProperty('--cursor-y', `${cy}px`);
    container?.style.setProperty('--cursor-x', `${cx}px`);
  }
</script>

<div
  bind:this={container}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  class="relative cursor-shine rounded-xl"
>
  <slot />
</div>

<style>
  .cursor-shine {
    background: radial-gradient(
      600px circle at var(--cursor-x) var(--cursor-y),
      rgba(255, 255, 255, 0.08),
      transparent 40%
    );
  }
</style>
