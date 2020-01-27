import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA = {
  state: {
    name: '张三',
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '1111'
    },
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
    fullname3(state, getters, rootstate) {
      return getters.fullname2 + "---" + rootstate.count
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', '王五')
      }, 1000);
    }
  }
}

const store = new Vuex.Store({
  //保持状态
  state: {
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
  },
  //vuex的store状态的更新唯一方式：提交Mutation,不要在mutations中进行任何异步操作
  mutations: {
    //定义方法：
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementCount(state, count) {
      state.count += count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    addAddress(state) {
      Vue.set(state.info, 'address', '临盘采油厂')
      Vue.delete(state.info, 'age')
    }
  },
  //异步操作
  actions: {
    aUpdateInfo(context, payload) {
      // var timer = setTimeout(() => {
      //   context.commit('addAddress')
      //   payload()
      // }, 1000)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('addAddress')
          console.log(payload);
          resolve('11111')
        }, 1000);
      })
    }
  },
  //类似组件中的计算属性，获取一些编译后的state
  getters: {
    powerCounter(state) {
      return state.count * state.count
    },
    age20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    age20stulength(state, getters) {
      return getters.age20stu.length
    },
    //getter传入参数
    ageAgestu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

//3.导出
export default store
