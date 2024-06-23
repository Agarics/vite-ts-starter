<script setup lang="ts">
import { ref } from 'vue'
import RippleDirective from '@/directives/ripple'

const vRipple = RippleDirective
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="text-center">
    <button v-ripple type="button" @click="count++">
      count is {{ count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
