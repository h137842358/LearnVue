import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//使用全局的axios
// // 配置请求的基准URL地址
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// //超时时间
// axios.defaults.timeout = 5000
//1.axios基本使用
// axios({
//   url: '/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: '/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// //2.axios发送并发请求
// axios.all(
//   [
//     axios({
//       url: '/home/multidata',
//     }),
//     axios({
//       url: '/home/data',
//       params: {
//         type: 'sell',
//         page: 5
//       }
//     })
//   ]
// ).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: 'http://www.baidu.com',
//   timeout: 10000
// })


import {
  request
} from './network/request'

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: {
//     url: '/home/data'
//   },
//   success: function (res) {
//     console.log(res);
//   },
//   failure: function (err) {
//     console.log(err);
//   }
// })


request({
  url: '/home/data'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
