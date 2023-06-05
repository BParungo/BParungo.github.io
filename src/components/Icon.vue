<script setup lang="ts">
  const props = defineProps<{
    path:string;
  }>()

</script>

<template>
    <div class="card">
      <img class="skill-icon" :src="props.path" :alt="props.path"/>
    </div>
</template>

<style scoped>
.card{
  padding: 1rem;
  background: rgba(var(--accent2),.5);
  transition: all .33s ;
  display: flex;
  border-radius: 0;
  cursor: pointer;
}
.card:hover{
  background: rgba(var(--accent2),1);
  border-radius: 50px;
}
img{
  margin: auto;
  padding: .25rem;
  height: 4rem;
  width: 4rem;
}

</style>