<template>
  <div id="tab-bar">
    <tab-bar-item v-for="index in 4" :key="index">
      <img slot="item-icon" v-if="isActive" :src="imageListActive[index-1]" />
      <img slot="item-icon" v-else="isActive" :src="imageList[index-1]" />
      <div slot="item-text" :class="{active:isActive}">{{textList[index-1]}}</div>
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
      isActive: true
    }
  },
  components: {
    TabBarItem
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