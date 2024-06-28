<template>
  <component :is="layout"><slot /></component>
</template>
<script setup lang="ts">
import { computedAsync } from '@vueuse/core'
import { useRoute } from 'vue-router'

const layout = computedAsync(async () => {
  const route = useRoute()
  try {
    const { layout = 'default' } = route.meta
    const layoutComponent = await import(`@/layouts/${layout}.vue`)
    return layoutComponent.default
  } catch (err) {
    console.warn(`fail load: @/layouts/${layout}.vue`, err)
    const defaultComponent = await import(`@/layouts/default.vue`)
    return defaultComponent.default
  }
})
</script>
