export default {
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
}
