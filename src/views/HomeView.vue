<script setup>

</script>

<template>
  <main>
    <div class="Contenedor">
      <a href="/info">
        <div class="card">
          <img src="/logo.png" alt="" >
        </div>
      </a>
      <p class="texto">click aqui</p>

      <div class="CursosP">
        <h4>Cursos presenciales</h4>

      </div>

      <div class="CursosL">
        <h4>Cursos en linea</h4>

      </div>
      
    </div>
  </main>
</template>


<style scoped>
  .Contenedor{
    perspective: 60rem;
    display: grid;
    grid-template-rows: repeat(20, 100px);
    grid-template-columns: repeat(15,105px);
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
    grid-column-start: 7;
    grid-row-start: 4;
  }
  img:hover{
    rotate: y 15deg;
    scale: 1.05;
  }
  .CursosP{
    grid-column-start: 2;
    grid-column-end: 6;
    text-align: center;
    grid-row-start: 2;
  }
  .CursosL{
    grid-column-start: 11;
    grid-column-end: 15;
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

</style>