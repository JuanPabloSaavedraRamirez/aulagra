<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
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
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
a{
  text-decoration: none;
  font-family: 'Concert One', sans-serif;
}
body{
  /* background-color: #cad4fa; */
  background-image: url(/public/FondoP2.jpg);
  margin: 0;
}
h1{
  text-align: center;
  font-family: 'Concert One', sans-serif;
}
.body{
  min-height: calc(100dvh - 350px);
}
h2{
  font-family: 'Concert One', sans-serif;
}
h3{
  font-family: 'Concert One', sans-serif;
}
h4{
  font-family: 'Concert One', sans-serif;
}
p{
  font-family: 'Concert One', sans-serif;
}
</style>