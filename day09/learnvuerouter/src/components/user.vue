<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，呃呃呃</p>
    <h2>{{UserId}}</h2>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    UserId() {
      return this.$route.params.userId
    }
  },
  created() {
    console.log('create')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style>
</style>