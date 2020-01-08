const {
  sum,
  mul
} = require('./js/mathUtils').default

import {
  obj
} from './js/info'

require('./css/normal.css')

require('./css/special.less')

document.writeln('<h2>你好啊，刘丹丹</h2>')

import Vue from 'vue'
import App from './vue/App.vue'

//使用Vue进行开发
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
document.writeln('<h3>大哥，你好</h3>')
console.log(sum(10, 20))
console.log(mul(4, 5))
console.log(obj)