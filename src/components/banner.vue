<template>
  <swiper :options="swiperOption" ref="mySwiper">
    　　<swiper-slide v-for="(item, index) in listImg" :key="index">
    　　　　<img :src="item" alt="">
    　　</swiper-slide>
    　　<div class="swiper-pagination" slot="pagination"></div> (分页器)
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'banner',
    props: ['listImg'],
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2000,
          autoplayDisableOnInteraction: false,
          loop: false,
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows : true
        }
      }
    },
    //定义这个sweiper对象
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
  }
</script>

<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 6rem;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet {
      width: 20px;
      height: 20px;
      display: inline-block;
      background: #7c5e53;
    }
  }
</style>
