import Vue from 'vue'
export default {
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
}
