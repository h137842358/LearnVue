<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
export default {
  data() {
    return {}
  },
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
/* 引入样式 */
@import './assets/css/base.css';
</style>
