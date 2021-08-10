<template>
  <div class="cart-card">
    <div class="triangle"></div>
    <v-card
      min-width="100vw"
      width="100vw"
      height=" 93.7vh"
      class="rounded-0"
    >
      <div class="grid">
        <v-card
          class="
            rounded-0
            shopping-cart
            secondary--text
          "
          color="secondary"
          height="100vh"
        >
          <div
            class="
              flex-title
              primary--text
            "
          >
            <v-card-title
              class="
                font-size-big
                primary--text
              "
              >SHOPPING
              CART</v-card-title
            >
            <v-card-title
              class="primary--text"
              >2ITEMS</v-card-title
            >
          </div>
          <v-carousel
            :show-arrows="false"
            vertical-delimiters="right"
            hide-delimiter-background
            :height="700"
            class="slide"
            light
          >
            <v-carousel-item
              v-for="color in colors"
              :key="color"
              class="product-contents"
            >
              <div
                class="product-content"
              >
                <img
                  src="~assets/a.png"
                  alt="Alice Dress"
                />
                <div
                  class="product-title"
                >
                  <p
                    class="
                      font-size-big
                    "
                  >
                    The Alice Dress
                    <br /><span
                      class="
                        font-size-small
                      "
                    >
                      In Cherry Blooming
                      Meadow
                    </span>
                  </p>
                </div>
                <p class="product-size">
                  XS
                </p>

                <div
                  class="product-color"
                ></div>
                <v-btn
                  class="
                    product-count-btn
                    secondary--text
                  "
                  color="primary"
                  >-</v-btn
                >

                <p
                  class="product-count"
                >
                  1
                </p>
                <v-btn
                  class="
                    product-count-btn
                    secondary--text
                  "
                  color="primary"
                  >+</v-btn
                >
                <p
                  class="product-price"
                >
                  355000원
                </p>

                <v-btn
                  class="
                    font-size-big
                    primary--text
                  "
                  elevation="0"
                  color="secondary"
                  >X</v-btn
                >
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-card>
        <v-card
          class="
            rounded-0
            secondary--text
          "
          color="primary"
        >
          <div
            class="grid"
            color="primary"
          >
            <v-card-title
              class="
                summary
                font-size-big
              "
              >Summary</v-card-title
            >
            <v-btn
              class="
                font-size-big
                exit-btn
                secondary--text
              "
              color="primary"
              elevation="0"
              >X</v-btn
            >
          </div>
          <div class="total-info">
            <p>총 가격</p>
            <p>배송비</p>
            <p>관세 및 부가세</p>
            <div class="flex-btn">
              <v-btn
                class="
                  shipment-btn
                  primary--text
                  rounded-0
                "
                elevation="0"
                color="secondary"
              >
                배송안내
              </v-btn>
              <v-btn
                class="
                  refund-btn
                  primary--text
                  rounded-0
                "
                elevation="0"
                ripple="0"
                color="secondary"
              >
                취소/환불 안내
              </v-btn>
            </div>
          </div>
          <div class="total-price">
            <v-card-title
              class="font-size-big"
              >합계</v-card-title
            >
            <p class="font-size-big">
              71000원
            </p>
          </div>
          <v-btn
            class="
              font-size-big
              buy
              rounded-0
              primary--text
            "
            color="secondary"
            >구매하기</v-btn
          >
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
  }),
}
</script>

<style scoped lang="scss">
img {
  width: 154px;
  height: 193px;
}

.font-size-big {
  font-size: 2rem;
}
.font-size-small {
  font-size: 1rem;
  font-weight: 100;
}
.grid {
  display: grid;
  grid-template-columns: 2.5fr 0.8fr;
  border-bottom: 1px solid;
  font-family: 'BMHANNAPro';
  font-weight: bold;
  height: 65px;
}
.slide {
  width: 100%;
}
.product-contents * {
  margin: 20px;
}
.product-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.product-title {
  height: 100px !important;
  line-height: 20px;
}
.product-count-btn {
  min-width: 30px !important;
  height: 30px !important;
  margin: 20px;
  padding: 0 !important;
}
.product-color {
  width: 30px;
  height: 30px;
  border: 0px solid black !important;
  border-radius: 25px;
  background-color: pink;
}
.flex-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
}
.flex-btn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.summary {
  margin: 0 20px 20px;
}
.exit-btn {
  margin: 15px;
}

.total-info {
  margin: 20% 0 0;
  margin-left: 20px;
  font-weight: 100;
  font-size: 1.3rem;
}
.total-info p {
  margin: 0 20px;
  padding: 2px 0 0;
}
.total-price {
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 80% 0 0 10%;
}
.total-price p {
  margin: 6px 0 0;
}
.buy {
  width: 80%;
  min-height: 6.5%;
  margin-left: 10%;
}

.shipment-btn,
.refund-btn {
  margin-top: 20px;
  width: 110px;
  max-height: 24px;
}
.triangle {
  width: 0px;
  height: 0px;
  position: absolute;
  top: -15px;
  right: 20px;
  z-index: 12;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 15px solid #363636;
}
.theme--dark {
  .triangle {
    border-bottom: 15px solid #d8cfc7;
  }
}
</style>
