<script setup lang="ts">
import TransitionPage from './components/transition/TransitionPage.vue'
</script>

<template>
  <RouterView v-slot="{ route, Component }">
    <TransitionPage :name="route.meta.transition">
      <KeepAlive>
        <component :is="Component" :key="route.path" />
      </KeepAlive>
    </TransitionPage>
  </RouterView>
</template>
