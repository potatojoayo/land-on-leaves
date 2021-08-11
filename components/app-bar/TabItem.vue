<template>
  <v-tab
    v-ripple="false"
    class="app-bar-tab"
    :to="item.to"
    >{{ item.name }}</v-tab
  >
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'

interface TabItem {
  name: string
  to: string
}
export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    } as PropOptions<TabItem>,
  },
})
</script>

<style lang='scss'>
.app-bar-tab {
  margin: 0 5px;
  font-family: 'Space Mono';
  width: 55px !important;
  min-width: 0px !important;
  padding: 0 0px !important;
  margin: 0 !important;
}
.v-tabs-slider-wrapper {
  height: 1px !important;
}
</style>

