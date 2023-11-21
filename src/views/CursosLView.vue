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
  <div >
    <h1 class="Titulo">Cursos en linea</h1>
    <div class="CursosL">
        <!-- Boton 1 -->
      <div class="CursosL1">
        <button @click="toggleMenu(1)" > <img src="Prueba.JPG" alt=""><h2 class="Fecha">20/11/2023 Curso de Eventos</h2></button>
        <div v-if="isOpen[1]" class="dropdown">
            <p class="tema">Curso de Organizacion de eventos</p>
            <p class="Miembros">Miembros: 20</p>
        </div>
      </div>

      <br>
      
      <!-- Boton 2 -->
      <div class="CursosL2">
        <button @click="toggleMenu(2)"> <img src="Prueba.JPG" alt=""><h2 class="Fecha">27/11/2023 Curso de Literatura</h2></button>
        <div v-if="isOpen[2]" class="dropdown">
          <p class="tema">Curso de Organizacion de literatura</p>
          <p class="Miembros">Miembros: 20</p>
        </div>
      </div>

      <br>

        <!-- Boton 3 -->
        <div class="CursosL3">
        <button @click="toggleMenu(3)"> <img src="Prueba.JPG" alt=""><h2 class="Fecha">27/11/2023 Curso de cuentos fantasticos</h2></button>
        <div v-if="isOpen[3]" class="dropdown">
          <p class="tema">Curso de Organizacion de cuentos fantasticos</p>
          <p class="Miembros">Miembros: 15</p>
        </div>
      </div>

      <br>

      <!-- Boton 4 -->
      <div class="CursosL4">
        <button @click="toggleMenu(4)"> <img src="Prueba.JPG" alt=""><h2 class="Fecha">27/11/2023 Curso de Poesia</h2></button>
        <div v-if="isOpen[4]" class="dropdown">
          <p class="tema">Curso de Organizacion de Poesia</p>
          <p class="Miembros">Miembros: 15</p>
        </div>
      </div>

    </div>

  </div>
</template>


<style scoped>
.CursosL{
  display: grid;
  grid-template-rows: repeat(20, 100px);
  grid-template-columns: repeat(18,105px);
}
.CursosL1{
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 6;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL1:hover{
  cursor: pointer;
}

.CursosL2{
  grid-column-start: 11;
  grid-column-end: 15;
  grid-row-start: 2;
  grid-row-end: 6;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL2:hover{
  cursor: pointer;
}

.CursosL3{
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 8;
  grid-row-end: 12;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL3:hover{
  cursor: pointer;
}

.CursosL4{
  grid-column-start: 11;
  grid-column-end: 15;
  grid-row-start: 8;
  grid-row-end: 12;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL4:hover{
  cursor: pointer;
}

.dropdown {
  display: grid;
  grid-template-rows: repeat(6, 30px);
  grid-template-columns: repeat(12, 35px);
  flex-direction: column;
  margin-top: 10px;
  background-color: #EDE8EC;
}
img{
  width: 420px;
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
cursor: pointer;
font: inherit;
line-height: normal;
overflow: visible;
padding: 0;
}

@media (max-width: 600px){
  .CursosL{
    display: grid;
    grid-template-rows: repeat(15, 50px);
    grid-template-columns: repeat(12,50px);
  }
  .Fecha{
    font-size: 11px;
  }
.Titulo{
  grid-column-start: 2;
  grid-column-end: 15;
  grid-row-start: 2;
}
.CursosL1{
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 6;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL1:hover{
  cursor: pointer;
}

.CursosL2{
  grid-column-start: 8;
  grid-column-end: 12;
  grid-row-start: 2;
  grid-row-end: 6;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL2:hover{
  cursor: pointer;
}

.CursosL3{
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 10;
  grid-row-end: 14;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL3:hover{
  cursor: pointer;
}

.CursosL4{
  grid-column-start: 8;
  grid-column-end: 12;
  grid-row-start: 10;
  grid-row-end: 14;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL4:hover{
  cursor: pointer;
}

.dropdown {
  display: grid;
  grid-template-rows: repeat(6, 30px);
  grid-template-columns: repeat(6, 35px);
  flex-direction: column;
  margin-top: 0;
  background-color: #EDE8EC;
}
img{
  width: 200px;
  grid-column-start: 11;
  grid-column-end: 15;
  text-align: center;
  grid-row-start: 2;
}

.tema{
    font-size: 13px;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 2;
}

.Miembros{
    font-size: 13px;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 3;
}

button {
    background: none;
    border: 0;
    color: inherit;
    cursor: pointer;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
  }
  }

</style>