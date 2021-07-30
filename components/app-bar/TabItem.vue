<template>
  <v-tab
    v-ripple="false"
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

<style scoped>
.v-tab {
  margin: 0 5px;
}
</style>
