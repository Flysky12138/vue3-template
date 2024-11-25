<script setup lang="ts">
import { FunctionalComponent } from 'vue'
import TransitionPage from './components/transition/TransitionPage.vue'
</script>

<template>
  <RouterView v-slot="{ route, Component }">
    <TransitionPage :name="route.meta.transition">
      <KeepAlive :include="route.meta.keepAlive ? (Component.type as FunctionalComponent).__name : undefined">
        <component :is="Component" />
      </KeepAlive>
    </TransitionPage>
  </RouterView>
</template>
