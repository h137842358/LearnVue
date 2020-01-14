<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('create')
  },
  destroyed() {
    console.log('destroyed')
  },
  //这两个函数只能在<keep-alive>中使用
  activated() {
    this.$router.replace(this.path)
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<style>
</style>