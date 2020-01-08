<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
  data() {
    return {
      message: '胡伟',
      name: '刘丹丹'
    }
  },
  components: {
    Cpn
  },
  methods: {
    btnClick() {
      console.log('btnClick')
    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>
