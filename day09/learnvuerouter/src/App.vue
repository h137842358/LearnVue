<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>Home</router-link>
    <router-link to="/about" tag="button" replace>About</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId" tag="button" replace>User</router-link> -->
    <!-- <router-link to="/profile" tag="button" replace>Profile</router-link> -->
    <!-- <router-link
      :to="{
      path:'/profile',
      query:{name:'huwei',age:18,height:1.88}
    }"
      tag="button"
      replace
    >Profile</router-link>-->
    <!-- <input type="button" value="Home" @click="toggle(0)" />
    <input type="button" value="About" @click="toggle(1)" />
    <input type="button" value="User" @click="toggle(2)" />-->
    <input type="button" value="User" @click="toggle(3)" />
    <input type="button" value="Profile" @click="toggle(4)" />
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    toggle(index) {
      if (index === 0) {
        //通过代码的方式修改路由
        //this.$router.push('/home')
        this.$router.replace('/home')
      } else if (index === 1) {
        //this.$router.push('/about')
        this.$router.replace('/about')
      } else if (index == 2) {
        this.$router.replace('/user')
      } else if (index === 3) {
        this.$router.push('/user/' + this.userId)
      } else {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'kebe',
            age: 19,
            height: 1.98
          }
        })
      }
    }
  }
}
</script>

<style>
/* .router-link-active {
  color: red;
} */
.active {
  color: red;
}
</style>
