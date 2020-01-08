<template>
  <div>
    <h2>我是cpn组件</h2>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data() {
    return {
      name: '我是cpn的name'
    }
  }
}
</script>

<style></style>
