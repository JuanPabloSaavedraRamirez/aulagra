<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/navbar.vue'


</script>

<template>
  <NavBar/>

  <RouterView />
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
</style>