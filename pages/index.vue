<template><div></div></template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {},
  mounted() {
    this.$axios.$get(
      'https://api.landonleaves.com/p/home/'
    )
  },
})
</script>

<style>
</style>
