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
  //axios的拦截器
  //axios设置请求拦截器
  instance1.interceptors.request.use(config => {
    //请求拦截器的作用
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网络请求（比如登录（token)），必须携带一些特殊的信息
    config.headers.mytoken = 'nihao' //设置响应头
    return config
  }, err => {
    console.log(err)
  })

  //axios设置响应拦截器
  instance1.interceptors.response.use(response => {
    return response.data //拦截处理响应结果，直接返回需要的数据
  }, err => {
    console.log(err)
  })


  return instance1(config)
}
