<template>
  <div class="cart-card">
    <div class="triangle"></div>
    <v-container
      color="primary"
      class="pa-0 card-content"
      fluid
    >
      <v-row no-guters class="pa-0 row ma-0">
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
            <div class="pa-0 column">
              <div class="item-row">
                <div class="title-container item">
                  <div class="secondary--text title">
                    Summary
                  </div>
                  <v-btn
                    icon
                    color="secondary"
                    class="close"
                    @click="close()"
                  >
                    <v-icon large>
                      mdi-window-close
                    </v-icon>
                  </v-btn>
                </div>

                <div
                  class="secondary--text mt-10 pr-2 item"
                >
                  <p class="korean">총 가격</p>
                  <p>₩672,100</p>
                </div>

                <div class="secondary--text pr-2 item">
                  <div class="item-content-row">
                    <p class="korean">배송비</p>
                    <v-btn icon color="secondary">
                      <v-icon>
                        mdi-information-outline
                      </v-icon>
                    </v-btn>
                  </div>
                  <p>₩20,000</p>
                </div>

                <div class="secondary--text pr-2 item">
                  <div class="item-content-row">
                    <p class="korean">관세 및 부가세</p>
                    <v-btn icon color="secondary">
                      <v-icon>
                        mdi-information-outline
                      </v-icon>
                    </v-btn>
                  </div>
                  <p>₩20,000</p>
                </div>

                <div class="mt-3 item">
                  <v-btn
                    class="korean primary--text button"
                    width="48%"
                    color="secondary"
                    >배송안내</v-btn
                  >
                  <v-btn
                    class="korean primary--text button"
                    width="48%"
                    color="secondary"
                    >취소/환불 안내</v-btn
                  >
                </div>
              </div>

              <div class="item-row">
                <v-divider></v-divider>
                <div
                  class="
                    secondary--text
                    pr-5
                    item
                    total-price
                  "
                >
                  <p class="korean">합계</p>
                  <p>₩712,100</p>
                </div>

                <div class="item">
                  <v-btn
                    class="korean primary--text buy-button"
                    color="secondary"
                  >
                    구매하기
                  </v-btn>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CartItem from './CartItem.vue'

export default {
  components: {
    CartItem,
  },
  methods: {
    ...mapMutations({
      close: 'app-bar/closeCards',
    }),
  },
}
</script>

<style lang='scss' >
.cart-card {
  position: absolute;
  right: -15px;
  top: 42px;
  width: 100vw;
}

.left-card {
  border-radius: 0 !important;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 30px;

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
}

.right-card {
  border-radius: 0 !important;
  height: 100% !important;

  .korean {
    font-family: 'BMHANNAPro';
  }

  .v-list-item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  p {
    margin: 0;
    font-size: 1.3rem;
  }
  .title {
    font-size: 2rem !important;
  }

  .close {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .button {
    font-size: 1.1rem;
  }

  .total-price {
    .korean {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.7rem;
    }

    margin-bottom: 10px;
  }

  .buy-button {
    font-size: 1.2rem;
    width: 100%;
    height: 3rem !important;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .item {
    display: flex;
    width: 100%;
    align-items: center;
    min-height: 50px;
    justify-content: space-between;
  }

  .item-content-row {
    display: flex;
    align-items: center;
  }

  .v-divider {
    border-color: #d8cfc7 !important;
    margin-bottom: 10px;
  }

  .theme--dark.v-divider {
    border-color: #707070 !important;
  }
}
.triangle {
  width: 0px;
  height: 0px;
  position: absolute;
  top: -15px;
  right: 18px;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 15px solid #363636;
}

.theme--dark {
  .triangle {
    border-bottom-color: #d8cfc7;
    z-index: 5;
  }
}

.card-content {
  height: calc(100vh - 48px) !important;
}

.row {
  height: 100% !important;
}
</style>
