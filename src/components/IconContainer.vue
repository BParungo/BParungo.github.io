<script setup lang="ts">
import Icon from "@/components/Icon.vue";

const svgFiles = Object.keys(import.meta.glob('/public/icons/*.{svg,png}'));
const paths = svgFiles.map(str =>{
  return str.replace("/public/", "");
})
</script>

<template>
  <Icon v-for="path in paths" :path="path"/>
</template>

<style scoped>

</style>