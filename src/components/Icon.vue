<script setup lang="ts">
  const props = defineProps<{
    path:string;
  }>()

</script>

<template>
  <img class="skill-icon" :src="props.path" :alt="props.path"/>
</template>

<style scoped>
  .skill-icon{
    height: 64px;
  }
</style>