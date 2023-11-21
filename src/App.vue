<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/navbar.vue'
import PieDePagina from './components/PieDePagina.vue';


</script>

<template>
  <NavBar/>

  <div class="body">
    <RouterView />
  </div>

  <PieDePagina/>
</template>

<style>
a{
  text-decoration: none;
}
body{
  background-color: #cad4fa;
  margin: 0;
}
h1{
  text-align: center;
  /* font-family: ; */
}
.body{
  min-height: calc(100dvh - 350px);
}
</style>