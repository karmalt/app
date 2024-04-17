<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'

export default {
  name: 'AppApp',
  components: {
    Header,
    Footer,
  },

  data() {
    return {}
  },

  mounted() {
    //通过Vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch('getcategoryList')
    this.$store.dispatch('getFloorList')
  },

  methods: {},
}
</script>

<style lang="less" scoped></style>
