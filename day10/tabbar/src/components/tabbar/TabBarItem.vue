<template>
  <div class="tab-bar-item">
    <router-link :to="routerLink" tag="span">
      <div v-if="isActive">
        <slot name="item-icon-active"></slot>
      </div>
      <div v-else>
        <slot name="item-icon"></slot>
      </div>
      <div :style="ActiveColor">
        <slot name="item-text"></slot>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.routerLink) !== -1
    },
    ActiveColor() {
      // console.log(this.text)
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  props: {
    routerLink: String,
    activeColor: {
      type: String,
      default: 'red'
    },
    text: String
  },
  methods: {}
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  vertical-align: middle;
}
</style>