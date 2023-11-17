<script>
export default {
  data() {
    return {
      isOpen: {
        1: false,
        2: false,
        3:false,
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
      <h1>Cursos en presenciales</h1>

      <div class="CursosLinea">

          <!-- Boton 1 -->
        <div>
          <button @click="toggleMenu(1)" class="CursosL">20/11/2023</button>
          <div v-if="isOpen[1]" class="dropdown">
              <p>Esta es una prueba ver como funciona</p>
              <img src="Pureba.JPG" alt="">
          </div>
        </div>
        
        <!-- Boton 2 -->
        <div>
          <button @click="toggleMenu(2)">Mostrar Menú 2</button>
          <div v-if="isOpen[2]" class="dropdown">
            <p>Esta es una prueba ver como funciona2</p>
          </div>
        </div>
    
          <!-- Boton 3 -->
          <div>
          <button @click="toggleMenu(3)">Mostrar Menú 3</button>
          <div v-if="isOpen[3]" class="dropdown">
            <p>Esta es una prueba ver como funciona3</p>
          </div>
        </div>

      </div>

  </div>
</template>


<style scoped>

.CursosLinea{
    display: grid;
    grid-template-rows: repeat(15, 30px);
    grid-template-columns: repeat(30, 35px);
}
.dropdown {
  display: grid;
  grid-template-rows: repeat(15, 30px);
  grid-template-columns: repeat(30, 35px);
  flex-direction: column;
  margin-top: 10px;
}
img{
  width: 100px;
  grid-column-start: 11;
  grid-column-end: 15;
  text-align: center;
  grid-row-start: 2;
}

p{
  grid-column-start: 2;
  grid-column-end: 15;
  /* text-align: center; */
  grid-row-start: 2;
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

</style>