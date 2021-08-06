<template>
  <div class="cart-card">
    <div class="triangle"></div>
    <v-card
      color="primary"
      width="1900px"
      height="240px"
    ></v-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.triangle {
  width: 0px;
  height: 0px;
  position: absolute;
  top: -14px;
  right: 0px;
  z-index: 12;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 15px solid #363636;
}
</style>
