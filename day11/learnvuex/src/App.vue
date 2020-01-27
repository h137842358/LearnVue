<template>
  <div id="app">
    <h2>{{$store.state.a.name}}</h2>
    <input type="button" value="修改名字" @click="updateName" />
    <h3>{{$store.getters.fullname}}</h3>
    <h3>{{$store.getters.fullname2}}</h3>
    <h3>{{$store.getters.fullname3}}</h3>
    <input type="button" value="异步修改名字" @click="asyncUpdateName" />
    <h1>{{$store.state.info}}</h1>
    <input type="button" value="添加address" @click="addAddress" />
    <h1>App组件</h1>
    <h2>{{$store.state.count}}</h2>
    <input type="button" value="+" @click="addition" />
    <input type="button" value="-" @click="subtraction" />
    <input type="button" value="+5" @click="addCount(5)" />
    <input type="button" value="+10" @click="addCount(10)" />
    <input type="button" value="addStu" @click="addStu" />

    <h1>{{$store.getters.powerCounter}}</h1>
    <h3>{{more20stu}}</h3>
    <h3>{{$store.getters.age20stu}}</h3>
    <h3>{{$store.getters.ageAgestu(12)}}</h3>
    <hello-word-vuex></hello-word-vuex>
  </div>
</template>

<script>
import HelloWordVuex from './components/helloword'
export default {
  name: 'App',
  data() {
    return {
      message: '我是App组件'
    }
  },
  components: {
    HelloWordVuex
  },
  computed: {
    more20stu() {
      return this.$store.state.students.filter(s => s.age > 20)
    }
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      this.$store.commit('incrementCount', count)
    },
    addStu() {
      const stu = { id: 114, name: 'shu', age: 22 }
      this.$store.commit('addStudent', stu)
    },
    addAddress() {
      // this.$store.dispatch('aUpdateInfo', () => {
      //   console.log('里面已经完成了！')
      // })
      this.$store.dispatch('aUpdateInfo', '我是携带的信息').then(res => {
        console.log('里面完成了提交')
        console.log(res)
      })
    },
    updateName() {
      this.$store.commit('updateName', '李四')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
</style>
