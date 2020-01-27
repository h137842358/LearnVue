<template>
  <div id="tab-bar">
    <tab-bar-item
      v-for="index in 4"
      :key="index"
      :routerLink="routerPathList[index-1]"
      :activeColor="colorList[index-1]"
      text="大家好"
    >
      <img slot="item-icon-active" :src="imageListActive[index-1]" />
      <img slot="item-icon" :src="imageList[index-1]" />
      <div slot="item-text">{{textList[index-1]}}</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  data() {
    return {
      imageList: [
        require('../../assets/img/tabbar/1.png'),
        require('../../assets/img/tabbar/2.png'),
        require('../../assets/img/tabbar/3.png'),
        require('../../assets/img/tabbar/4.png')
      ],
      imageListActive: [
        require('../../assets/img/tabbar/1.1.png'),
        require('../../assets/img/tabbar/2.1.png'),
        require('../../assets/img/tabbar/3.1.png'),
        require('../../assets/img/tabbar/4.1.png')
      ],
      textList: ['首页', '分类', '购物车', '我的'],
      routerPathList: ['/home', '/category', '/cart', '/profile'],
      colorList: ['red', 'yellow', 'blue', 'green']
    }
  },
  components: {
    TabBarItem
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
.active {
  color: red;
}
</style>