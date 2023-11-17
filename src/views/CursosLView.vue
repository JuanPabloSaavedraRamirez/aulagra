<script>
export default {
  data() {
    return {
      isOpen: {
        1: false,
        2: false,
        3: false,
      },
      texto: '',
    };
  },
  methods: {
    toggleMenu(menuNumber) {
      this.isOpen[menuNumber] = !this.isOpen[menuNumber];
    },
    agregarTexto() {
      this.texto = '';
    },
  },
};
</script>


<template>
  <div>
      <h1>Cursos en linea</h1>
      <!-- Boton 1 -->
    <div>
      <button @click="toggleMenu(1)" class="CursosL">20/11/2023 Curso de Eventos</button>
      <div v-if="isOpen[1]" class="dropdown">
          <p class="tema">Curso de Organizacion de eventos</p>
          <p class="Miembros">Miembros: 20</p>
          <img src="Prueba.JPG" alt="">
      </div>
    </div>

    <br>
    
    <!-- Boton 2 -->
    <div>
      <button @click="toggleMenu(2)" class="CursosL">27/11/2023 Curso de Literatura</button>
      <div v-if="isOpen[2]" class="dropdown">
        <p class="tema">Curso de Organizacion de eventos</p>
        <p class="Miembros">Miembros: 20</p>
        <img src="Prueba.JPG" alt="">
      </div>
    </div>

    <br>

      <!-- Boton 3 -->
      <div>
      <button @click="toggleMenu(3)" class="CursosL">04/12/2023 Curso de Cuentos</button>
      <div v-if="isOpen[3]" class="dropdown">
        <p>Esta es una prueba ver como funciona3</p>
      </div>
    </div>

    <br>

    <!-- Boton 4 -->
    <div>
      <button @click="toggleMenu(4)" class="CursosL">11/12/2023 Curso de Eventos</button>
      <div v-if="isOpen[4]" class="dropdown">
        <p>Esta es una prueba ver como funciona4 </p>
      </div>
    </div>

  </div>
</template>


<style scoped>
.dropdown {
  display: grid;
  grid-template-rows: repeat(12, 30px);
  grid-template-columns: repeat(30, 35px);
  flex-direction: column;
  margin-top: 10px;
  background-color: #c4c4c4;
}
img{
  width: 400px;
  grid-column-start: 11;
  grid-column-end: 15;
  text-align: center;
  grid-row-start: 2;
}

.tema{
    font-size: 15px;
    grid-column-start: 2;
    grid-column-end: 10;
    grid-row-start: 2;
}

.Miembros{
    font-size: 15px;
    grid-column-start: 2;
    grid-column-end: 10;
    grid-row-start: 3;
}

button {
background: none;
border: 0;
color: inherit;
/* cursor: default; */
font: inherit;
line-height: normal;
overflow: visible;
padding: 0;
}

.CursosL:hover{
    cursor: pointer;
}

</style>