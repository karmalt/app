<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :Key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import swiper from 'swiper'
export default {
  name: 'AppCarousel',
  props: ['list'],

  data() {
    return {}
  },
  watch: {
    list: {
      //立即监听：不管数据有没有变化，上来就监听一次
      immediate: true,
      handler() {
        //只能监听到数据已经有了，但v-for动态渲染结构没办法确定，因此需要nextTick
        this.$nextTick(() => {
          new swiper('.swiper-container', {
            loop: true,
            //分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      },
    },
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="less" scoped></style>
