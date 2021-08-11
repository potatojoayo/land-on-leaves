<template>
  <v-card class="product">
    <div class="image-container">
      <img src="~assets/images/knit.png" alt="product" />
    </div>
    <div class="information">
      <div class="descript">
        <div class="name">The Alice Dress</div>
        <div class="brand">Christy Dawn</div>
      </div>
      <div class="price">₩450,000</div>
    </div>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.product {
  border-radius: 0 0 0 0 !important;
  width: 25vw;
  height: 36vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #a0a0a0;
  border-left: 0;

  .image-container {
    width: 100%;
    height: 200px;
  }

  img {
    position: absolute;
    bottom: 0;
  }

  .information {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 10px 20px;
    height: 90px;
    width: 100%;
    background-color: #d8cfc7;
    border-top: 1px solid #a0a0a0;
    .name {
      font-size: 1.5rem;
    }
    .brand {
      font-size: 1.1rem;
    }
    .price {
      font-size: 1.3rem;
    }
  }
}
</style>
