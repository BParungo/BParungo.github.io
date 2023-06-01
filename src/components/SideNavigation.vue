<script setup lang="ts">

</script>

<template>
    <nav>
      <RouterLink :to="{name:'about'}">über mich</RouterLink>
      <RouterLink :to="{name:'experience'}">Laufbahn</RouterLink>
      <RouterLink :to="{name:'projects'}">Projekte</RouterLink>
      <RouterLink :to="{name:'contact'}">Kontakt</RouterLink>
    </nav>
</template>

<style scoped>
nav{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
a{
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  font-weight: 700;
  max-width: 218px;
}
a:hover{
  transition: color 0.3s;
  color: white;
}
a::before{
  content: "";
  background-color: var(--color-text);
  width: 8px;
  height: 2px;
  margin: auto 8px auto 0;
  transition: all 0.3s ease-out;
}
a:hover::before,.router-link-active::before{
  content: "";
  background-color: var(--color-text);
  width: 80px;
  margin-right: 8px;
}
.router-link-active{
  color:white;
}

</style>
