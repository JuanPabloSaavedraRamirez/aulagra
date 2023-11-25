<script setup>
import PieDePagina from '../components/PieDePagina.vue';
</script>

<template>
  <main>
    <div class="Contenedor">
      <a href="/info">
        <div class="card">
          <img src="/Logo2.png" alt="" >
        </div>
      </a>
      <p class="texto">click aqui</p>

      <div class="CursosP">
        <a href="/CursosP">
          <h2>Cursos presenciales</h2>

        </a>
      </div>

      <div class="CursosL">
        <a href="/CursosL">
          <h2>Cursos en linea</h2>

        </a>
      </div>
      
      <!-- <PieDePagina/> -->

    </div>
  </main>
</template>


<style scoped>
  .Contenedor{
    perspective: 60rem;
    display: grid;
    grid-template-rows: repeat(9, 100px);
    grid-template-columns: repeat(18,105px);
    object-position: center;

  }
  .card{
    overflow: hidden;
    height: 400px;
    width: 400px;
  }
  img{
    transition: rotate 500ms, scale 300ms;
    width: 315px;
    height: 305px;
    grid-column-start: 6;
  }
  a{
    grid-column-start: 9;
    grid-row-start: 4;
  }
  img:hover{
    rotate: y 15deg;
    scale: 1.05;
  }
  .CursosP{
    grid-column-start: 4;
    grid-column-end: 8;
    text-align: center;
    grid-row-start: 2;
  }
  .CursosL{
    grid-column-start: 13;
    grid-column-end: 17;
    text-align: center;
    grid-row-start: 2;
  }
  .texto{
    grid-column-start: 9;
    grid-row-start: 6;
    margin-top: 70px;
    position: absolute;
    color: #0e1438;
  }
  body{
    color: #0e1438;
  }

  @media (max-width: 600px){
  .Contenedor {
    perspective: 60rem;
    display: grid;
    grid-template-rows: repeat(8, 80px); 
    grid-template-columns: repeat(13, 50px); 
    object-position: center;
    max-width: 600px; 
    margin: 0 auto; 
  }

  .card {
    overflow: hidden;
    height: 150px; 
    width: 150px; 
    grid-column-start: 6;
    grid-column-end: 8;
    grid-row-start: 5;
  }

  img {
    transition: transform 500ms, scale 300ms; 
    width: 120px; 
    height: 105px; 
    /* grid-column-start: 4;  */
  }

  a {
    grid-column-start: 6; 
    grid-row-start: 3; 
  }

  img:hover {
    transform: rotateY(15deg) scale(1.05); 
  }

  .CursosP {
    grid-column-start: 2;
    grid-column-end: 5;
    text-align: center;
    grid-row-start: 2; 
  }

  .CursosL {
    grid-column-start: 9; 
    grid-column-end: 12; 
    text-align: center;
    grid-row-start: 2; 
  }

  .texto {
    grid-column-start: 6; 
    grid-row-start: 4; 
    margin-top: 50px; 
    position: absolute;
    color: #0e1438;
    
  }

  body {
    color: #0e1438;
  }

  }
</style>