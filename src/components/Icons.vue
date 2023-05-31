<script setup lang="ts">
  const props = defineProps<{
    path:string;
  }>()
</script>

<template>
  <img :src="props.path" :alt="props.path"/>
</template>

<style scoped>

</style>