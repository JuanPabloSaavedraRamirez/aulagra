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

    <swiper-slide><img src="1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="3.png" alt=""></swiper-slide>
    <swiper-slide><img src="4.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="5.jpg" alt=""></swiper-slide>
  </swiper>

  <div class="">
    <h1>¿Quienes somos?</h1>
    <h2>Aqui va a ir un texto donde describe lo que hace la escuela, como es, que se va manejando</h2>
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


  </div>
</template>

<style scoped>
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
    width: 100px;
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
    background-color: #cad4fa;
    margin: 0;
  }

  @media (max-width: 600px){
  .Formulario {
    display: grid;
    grid-template-rows: repeat(3, 60px);
    grid-template-columns: repeat(6, 1fr); 
    align-items: center;
    margin: 0 auto; 
    max-width: 600px; 
  }

  .form {
    grid-column: span 2; 
    text-align: center;
  }

  h1, h2 {
    text-align: center;
  }

  img {
    width: 100px;
  }

  input, button {
    border-radius: 10px;
    text-align: center;
    height: 20px;
    width: 100%; 
    box-sizing: border-box; 
    margin-bottom: 10px; 
  }

  button {
    border-radius: 10px;
  }

  body {
    background-color: #cad4fa;
    margin: 0;
  }
  }
</style>
