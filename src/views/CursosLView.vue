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
        <button @click="toggleMenu(1)" > <img class="img" src="/COPE2.jpg" alt=""> <h2 class="Fecha">20/11/2023 Curso Organización Profesional de Eventos</h2></button>
        <div v-if="isOpen[1]" class="dropdown">
            <p class="tema">El Curso Organización Profesional de Eventos</p>
            <p class="Data">Iniciamos el miércoles 20 de noviembre de 7 a 9 de la noche horario del centro de México.
Son 8 sesiones (una cada semana de 2 horas), vía Meet
Impartido por la Maestra Silvia Ramírez de León, profesora y organizadora de eventos por
más de 20 años.</p>
        </div>
      </div>

      <br>
      
      <!-- Boton 2 -->
      <div class="CursosL2">
        <button @click="toggleMenu(2)"> <img class="img" src="/TCC.jpg" alt=""> <h2 class="Fecha">27/11/2023 Curso de Cuento Corto</h2></button>
        <div v-if="isOpen[2]" class="dropdown">
          <p class="tema">Curso de Cuento Corto</p>
          <p class="Data">Taller de Cuento Corto
¿Cuál es la expresión mínima de un cuento? ¿Cómo pasa de ser cuento corto a minificción y
de ahí a la naciente tuiteratura de las redes sociales? Tales son las preguntas que
resolveremos en este taller acerca de la escritura que busca profundizar sobre la brevedad.
Leeremos muchos cuentos cortos para observar su funcionamiento y haremos ejercicios de
escritura para crear nuestros propios cuentos.</p>
        </div>
      </div>

      <br>

        <!-- Boton 3 -->
        <div class="CursosL3">
        <button @click="toggleMenu(3)">  <h3 class="Fecha">27/11/2023 Curso de los recursos de la novela</h3></button>
        <div v-if="isOpen[3]" class="dropdown">
          <p class="tema">Curso de los recursos de la novela.</p>
          <p class="Data">Leemos novelas breves y practicamos herramientas para novelar historias. Lo imparte el
escritor Fernando de León e incluye materiales de lectura. Se leen las novelas El complot
mongol de Rafael Bernal, El reporte de las minorías de P K Dick y Apuntes del subsuelo de
Doistoyevski. Además los temas: El diálogo. El monólogo. La descripción. La acción. La
reflexión.</p>
        </div>
      </div>

      <br>

      <!-- Boton 4 -->
      <div class="CursosL4">
        <button @click="toggleMenu(4)"> <img class="img" src="/Galeria9.jpg" alt=""> <h2 class="Fecha">27/11/2023 Curso de Poesia</h2></button>
        <div v-if="isOpen[4]" class="dropdown">
          <p class="tema">Curso de Organizacion de Poesia</p>
          <p class="Data">Veremos como es que se crea la poesia y que la conlleva asi como varios escritores de poesia bastante reconocidos
            analizaremos poemos y veremos a profundidad como son y como es que se escriben estos mismos
          </p>
        </div>
      </div>

    </div>

  </div>
</template>


<style scoped>
.img{
  width: 420px;
  height: 300px;
}
.CursosL{
  display: grid;
  grid-template-rows: repeat(14, 100px);
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
    font-size: 13px;
    grid-column-start: 2;
    grid-column-end: 12;
    grid-row-start: 1;
}

.Data{
    font-size: 13px;
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
  .CursosL{
    display: grid;
    grid-template-rows: repeat(46, 50px);
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
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 2;
  grid-row-end: 9;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL1:hover{
  cursor: pointer;
}

.CursosL2{
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 13;
  grid-row-end: 20;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL2:hover{
  cursor: pointer;
}

.CursosL3{
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 24;
  grid-row-end: 31;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL3:hover{
  cursor: pointer;
}

.CursosL4{
  grid-column-start: 4;
  grid-column-end: 10;
  grid-row-start: 35;
  grid-row-end: 42;
  align-items: center;
  background-color: #EDE8EC;
}
.CursosL4:hover{
  cursor: pointer;
}

.dropdown {
  display: grid;
  grid-template-rows: repeat(6, 30px);
  grid-template-columns: repeat(8, 35px);
  flex-direction: column;
  margin-top: 0;
  background-color: #EDE8EC;
}
.img{
  width: 300px;
}

.tema{
    font-size: 10px;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 2;
}

.Data{
    font-size: 10px;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 9;
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