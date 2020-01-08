export default {
  template: `
  <div> <h2>{{message}}</h2>
  <button @click="btnClick">按钮</button>
  <h2>{{name}}</h2>
  </div>
  `,
  data() {
    return {
      message: '胡伟',
      name: '刘丹丹'
    }
  },
  methods: {
    btnClick() {
      console.log('btnClick');
    }
  },
}