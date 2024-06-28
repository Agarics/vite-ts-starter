<template>
  <div wh-full flex flex-col>
    <div w-full h-60px flex items-center>
      <div w-1200px mx-auto my-0>
        <h1>头部</h1>
      </div>
    </div>
    <div class="flex-1 flex">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
