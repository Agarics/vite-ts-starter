<template>
  <RouterView />
</template>
<script setup lang="ts">
import { unref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useTitle } from '@vueuse/core'
import { REDIRECT_NAME } from '@/router/constant'

const { currentRoute } = useRouter()
const pageTitle = useTitle()

watch(
  [() => currentRoute.value.path],
  () => {
    const route = unref(currentRoute)

    if (route.name === REDIRECT_NAME) {
      return
    }

    const tTitle = route?.meta?.title as string
    pageTitle.value = tTitle
  },
  { immediate: true }
)
</script>
