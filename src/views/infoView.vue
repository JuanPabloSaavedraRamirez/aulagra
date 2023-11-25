<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import '../components/style.css';
  import 'swiper/css/scrollbar';
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
      };
    },
  };
</script>

<template>
  <br> <br>
  <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    :loop="true"
    :autoplay="{ delay: 1000 }"
    class="mySwiper">

  <swiper-slide><img src="/Galeria2.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="/Galeria4.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="/Galeria6.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="/Galeria7.jpg" alt=""></swiper-slide>
  <swiper-slide><img src="/Galeria8.jpg" alt=""></swiper-slide>

  </swiper>

  <div class="">
    <h1>¿Quienes somos?</h1>
    <h2 class="texto">Aula Gramma es aprendizaje en curso</h2>
    <h3 class="texto">Nuestro objetivo:</h3>
    <h3 class="texto">Ser un espacio para la creación y el conocimiento con base en la lectura y la escritura, teoría y
        práctica en cada sesión y ambas aplicadas con la experiencia de nuestros docentes. Nuestro
        propósito es fortalecer la expresión literaria y artística desde un emprendimiento creativo y abierto
        a todas las edades. Aula Gramma está en permanente evolución ofreciendo talleres novedosos y
        cursos con metodologías modernas, sin olvidar la importancia de la cultura literaria clásica.
        Aula Gramma también se enfoca en los emprendedores y ofrece para ellos cursos innovadores y
        prácticos que los ayudarán a establecer las bases de sus negocios de una forma sencilla,
        profesional y rentable.</h3>
        
    <br><br><br><br>
    <!-- Formulario -->
    <div class="Formulario">
      <div class="form">
        <form action="https://formsubmit.co/saavedra75@live.com" method="POST">
          <h2>¡Contactate con nosotros!</h2>
          <input type="hidden" name='_autoresponse' />
          <h3>Nombre:</h3><input type="text" name="name" required/>
          <h3>Correo:</h3><input type="email" name="email" required/>
          <h3>Numero:</h3><input type="text" name="number" required/>
          <br>
          <br>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
    <br><br><br><br>

  </div>
</template>

<style scoped>

  .texto{
    margin-left: 200px;
    margin-right: 200px;
  }
  .Formulario {
    display: grid;
    grid-template-rows: repeat(3, 100px);
    grid-template-columns: repeat(18,105px);
    align-items: center;
  }
  .form{
    grid-column-start: 9;
    grid-column-end: 11;
    grid-row-start: 2;
    text-align: center;
  }

  h1 {
    text-align: center;
  }
  h2{
    text-align: center;
  }

  img {
    width: 300px;
    height: 300px;
    background-color: #cad4fa;
  }

  input{
    border-radius: 10px;
    text-align: center;
    height: 20px;
  }
  button{
    border-radius: 10px;
  }

  body{
    background-image: url(/public/FondoP2.jpg);
    margin: 0;
  }

  @media (max-width: 600px) {
  .Formulario {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: 1fr; 
  }

  .form {
    grid-column: 1; 
  }

  .texto{
    margin-left: 100px;
    margin-right: 100px;
  }

  img {
    width: 300px;
  }
}
</style>
