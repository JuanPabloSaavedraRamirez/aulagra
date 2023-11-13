<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../navbar.vue'

</script>
//Aqui es la prinicipal, donde se manejan las cosas
<template>
  <header>
    <NavBar/>

  </header>

  <RouterView />
</template>

<style>
a{
  text-decoration: none;
}
body{
  background-color: #eeeaeb;
}
</style>