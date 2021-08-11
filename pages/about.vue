<template>
  <div>
    <AboutItem></AboutItem>
  </div>
</template>

<script>
import Vue from 'vue'
import AboutItem from '../components/about/AboutItem.vue'
export default Vue.extend({
  components: {
    AboutItem,
  },
  layout: 'about',
})
</script>

<style></style>
