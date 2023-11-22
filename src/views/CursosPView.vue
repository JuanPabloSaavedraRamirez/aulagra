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
    <h1 class="Titulo">Cursos en Presenciales</h1>
    <div class="CursosP">
        <!-- Boton 1 -->
      <div class="CursosP1">
        <button @click="toggleMenu(1)" > <img src="OrganizacionEventos.JPG" alt=""><h2 class="Fecha">20/11/2023 Curso de Organización Profesional de Eventos</h2></button>
        <div v-if="isOpen[1]" class="dropdown">
            <p class="tema">Curso de Organización Profesional de Eventos</p>
            <p class="Data">Presencial en Guadalajara
              Lunes 27 y martes 28 de noviembre.
Impartido por la Maestra Silvia Ramírez de León, con más de 20 años trabajando en el área
de eventos e impartiendo cursos.
            </p>
        </div>
      </div>

      <br>
      
      <!-- Boton 2 -->
      <div class="CursosP2">
        <button @click="toggleMenu(2)"> <img src="CursoOR.png" alt=""><h2 class="Fecha">27/11/2023 Curso de Ortografia y Redaccion</h2></button>
        <div v-if="isOpen[2]" class="dropdown">
          <p class="tema">Curso de Ortografia y Redaccion</p>
          <p class="Data">Miembros: 20</p>
        </div>
      </div>

      <br>

        <!-- Boton 3 -->
        <div class="CursosP3">
        <button @click="toggleMenu(3)"> <img src="CursoOR2.png" alt=""><h2 class="Fecha">27/11/2023 Curso de Ortografia y Redaccion</h2></button>
        <div v-if="isOpen[3]" class="dropdown">
          <p class="tema">Curso de Ortografia y Redaccion</p>
          <p class="Data">Miembros: 15</p>
        </div>
      </div>

      <br>

      <!-- Boton 4 -->
      <div class="CursosP4">
        <button @click="toggleMenu(4)"> <img src="CursoNoche.png" alt=""><h2 class="Fecha">27/11/2023 Curso de Mounstros y demonios 2</h2></button>
        <div v-if="isOpen[4]" class="dropdown">
          <p class="tema">Curso de Mounstros y demonios 2</p>
          <p class="Data">Miembros: 15</p>
        </div>
      </div>
      
    </div>

  </div>
</template>


<style scoped>
img{
  width: 420px;
  height: 300px;
}
.CursosP{
  display: grid;
  grid-template-rows: repeat(14, 100px);
  grid-template-columns: repeat(18,105px);
}
.Titulo{
  grid-column-start: 2;
  grid-column-end: 15;
  grid-row-start: 2;
}
.CursosP1{
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 6;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosP1:hover{
  cursor: pointer;
}

.CursosP2{
  grid-column-start: 11;
  grid-column-end: 15;
  grid-row-start: 2;
  grid-row-end: 6;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosP2:hover{
  cursor: pointer;
}

.CursosP3{
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 8;
  grid-row-end: 12;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosP3:hover{
  cursor: pointer;
}

.CursosP4{
  grid-column-start: 11;
  grid-column-end: 15;
  grid-row-start: 8;
  grid-row-end: 12;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosP4:hover{
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
    grid-column-end: 12;
    grid-row-start: 1;
}

.Data{
    font-size: 15px;
    grid-column-start: 2;
    grid-column-end: 12;
    grid-row-start: 2;
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
  .CursosP{
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
.CursosP1{
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 6;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosP1:hover{
  cursor: pointer;
}

.CursosP2{
  grid-column-start: 8;
  grid-column-end: 12;
  grid-row-start: 2;
  grid-row-end: 6;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosP2:hover{
  cursor: pointer;
}

.CursosP3{
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 10;
  grid-row-end: 14;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosP3:hover{
  cursor: pointer;
}

.CursosP4{
  grid-column-start: 8;
  grid-column-end: 12;
  grid-row-start: 10;
  grid-row-end: 14;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosP4:hover{
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

.Data{
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