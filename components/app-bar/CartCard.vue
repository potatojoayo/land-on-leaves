<template>
  <div class="cart-card">
    <div class="triangle"></div>
    <v-container color="primary" class="pa-0" fluid>
      <v-row no-guters class="pa-0">
        <v-col cols="9" class="pa-0">
          <v-card
            height="calc(100vh - 50px)"
            color="secondary"
            class="left-card"
          >
            <v-col class="pa-0">
              <v-container
                class="left-top primary--text pa-0"
                fluid
              >
                <p class="title">SHOPPING CART</p>
                <p class="item-count">2 ITEMS</p>
              </v-container>
              <v-divider></v-divider>
              <section class="left-main">
                <CartItem />
              </section>
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="3" class="pa-0">
          <v-card
            height="calc(100vh - 50px)"
            color="primary"
            class="pa-5 right-card"
          >
            HIHI
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
  components: {
    CartItem,
  },
}
</script>

<style scoped>
.cart-card {
  position: absolute;
  right: -15px;
  top: 50px;
  width: 100vw;
  height: calc(100vh - 45px);
}
.left-card {
  border-radius: 5px 0px 0px 5px !important;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 30px;
}
.right-card {
  border-radius: 0px 5px 5px 0px !important;
}
.triangle {
  width: 0px;
  height: 0px;
  position: absolute;
  top: -25px;

  right: 18px;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 15px solid #363636;
}

.left-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 2rem !important;
  font-family: 'Space Mono' !important;
}
.item-count {
  font-size: 1.2rem !important;
}
</style>
