import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'
//1.安装插件
Vue.use(Vuex)

//2.创建对象

const state = {
  count: 1000,
  students: [{
      id: 110,
      name: 'why',
      age: 18
    },
    {
      id: 111,
      name: 'huwei',
      age: 19
    },
    {
      id: 112,
      name: 'liudandan',
      age: 22
    },
    {
      id: 113,
      name: 'egg',
      age: 21
    }
  ],
  info: {
    name: 'huwei',
    phoneNum: '15902691912',
    age: 29
  }
}

const store = new Vuex.Store({
  //保持状态
  state,
  //vuex的store状态的更新唯一方式：提交Mutation,不要在mutations中进行任何异步操作
  mutations,
  //异步操作
  actions,
  //类似组件中的计算属性，获取一些编译后的state
  getters,
  modules
})

//3.导出
export default store
