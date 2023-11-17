<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/navbar.vue'


</script>
//Aqui es la prinicipal, donde se manejan las cosas
<template>
  <NavBar/>

  <RouterView />
</template>

<style>
a{
  text-decoration: none;
}
body{
  background-color: #eeeaeb;
  margin: 0;
}
h1{
  text-align: center;
}
</style>