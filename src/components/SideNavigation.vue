<script setup lang="ts">

</script>

<template>
    <nav>
      <RouterLink to="/">über mich</RouterLink>
      <RouterLink to="/experience">Laufbahn</RouterLink>
      <RouterLink to="/projects">Projekte</RouterLink>
      <RouterLink to="/contact">Kontakt</RouterLink>
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
a::before{
  content: "";
  background-color: var(--color-text);
  width: 8px;
  height: 2px;
  margin: auto 8px auto 0;
  transition: all .3s ease-out;
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
