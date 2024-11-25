<script setup lang="ts">
import { RouteMeta } from 'vue-router'

const props = defineProps<{
  name: RouteMeta['transition']
}>()
</script>

<template>
  <section class="relative h-screen w-screen overflow-hidden">
    <Transition :name="props.name">
      <slot />
    </Transition>
  </section>
</template>

<style scoped>
.slide-left,
.slide-right {
  &-enter-active,
  &-leave-active {
    @apply absolute inset-0 transition-all duration-500 will-change-transform;
  }
}
.slide-right {
  &-enter-active {
    @apply z-10;
  }
  &-enter-from {
    @apply translate-x-full;
  }
  &-leave-to {
    @apply opacity-0;
  }
}
.slide-left {
  &-enter-from {
    @apply -translate-x-1/2;
  }
  &-leave-active {
    @apply z-10;
  }
  &-leave-to {
    @apply translate-x-full;
  }
}
</style>
