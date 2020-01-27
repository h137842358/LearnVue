export default {
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
}
