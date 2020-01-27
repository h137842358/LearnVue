import axios from 'axios'
// export function request(config, success, failure) {
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   //发送真正的网络请求
//   instance1(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }


// export function request(config) {
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   //发送真正的网络请求
//   instance1(config.baseConfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }


// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance1 = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance1(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

export function request(config) {
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  return instance1(config)
}
