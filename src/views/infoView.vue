<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  import '../components/style.css';

  // import required modules
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
    class="mySwiper"
  >
    <swiper-slide><img src="1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="2.jpg" alt=""></swiper-slide>
	<swiper-slide><img src="3.png" alt=""></swiper-slide>
    <swiper-slide><img src="4.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="5.jpg" alt=""></swiper-slide>
  </swiper>
    <div class="">
      <h1>¿Quienes somos?</h1>
    </div>
  </template>

  <style scoped>
	
  h1{
    text-align: center;
  }
</style>
