<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { _demoApi } from '@/service/api/demo'

const testApiResult = ref()

async function testApi() {
  const { result } = await _demoApi()
  testApiResult.value = result
}

onMounted(() => {
  testApi()
})
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center">
    <span class="i-custom:vue size-80" />
    <HelloWorld msg="Hello World" />
    <p>Api test result:{{ JSON.stringify(testApiResult || {}) }}</p>
  </div>
</template>

<style lang="less" scoped>
h1 {
  font-size: 30px;
}
</style>
