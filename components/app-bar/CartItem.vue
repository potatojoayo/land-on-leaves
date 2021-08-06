<template>
  <v-card class="cart-item pl-3" elevation="0">
    <v-list-item>
      <v-card
        class="image-container"
        color="primary"
        height="100px"
        width="100px"
      >
        <img
          src="~assets/images/Alice.png"
          alt="product"
          height="170px"
        />
      </v-card>
    </v-list-item>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>
          The Alice Dress
        </v-list-item-title>
        <v-list-item-subtitle>
          In Cherry Blooming Meadow
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item class="size"> XS </v-list-item>

    <v-list-item>
      <div class="color-icon"></div>
    </v-list-item>

    <v-list-item>
      <v-row>
        <v-icon class="mr-1"> mdi-minus-box</v-icon>
        1
        <v-icon class="ml-1"> mdi-plus-box</v-icon>
      </v-row>
    </v-list-item>

    <v-list-item>
      <div class="price">₩ 355,2000</div>
    </v-list-item>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.cart-item {
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
}
.image-container {
  position: relative;
}
img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.v-list-item__title {
  font-size: 1.5rem;
}

.color-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #e2c8c8;
  border: 1px solid #707070;
}
.size {
  font-family: 'Space Mono';
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
}
</style>
