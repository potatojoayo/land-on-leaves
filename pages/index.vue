<template>
  <div class="ma-0 pa-0 main-page">
    <v-col class="ma-0 pa-0">
      <v-row class="ma-0 pa-0 first-row">
        <v-col class="ma-0 pa-0">
          <video
            poster="~assets/images/main.png"
            src="~assets/videos/paisley.mp4"
            autoplay
            loop
            muted
            height="100%"
          />
        </v-col>
        <v-col class="first-row-right-col">
          <div class="name primary--text">Pasley Dress</div>
          <div class="brand primary--text">
            Christy Dawn
          </div>
          <v-btn
            color="primary"
            class="secondary--text pa-6"
            >둘러보기</v-btn
          >
        </v-col>
      </v-row>
      <v-row class="second-row ma-0 pa-0">
        <v-card
          class="label pl-5 pr-5 secondary--text"
          color="primary"
          >FIND YOUR WEAR</v-card
        >
        <div class="products">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductItem from '../components/product/ProductItem.vue'
export default Vue.extend({
  components: {
    ProductItem,
  },
})
</script>

<style lang='scss' scoped>
.main-page {
  .first-row {
    border-bottom: 1px solid #363636 !important;

    video {
      min-width: 100%;
      min-height: 100%;
    }

    .first-row-right-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 110vh;

      button {
        margin-bottom: 100px;
        margin-top: 10px;
        font-family: 'BMHANNAPro';
        font-size: 1.3rem;
        min-height: 50px;
      }

      .name {
        font-size: 2.5rem;
      }
      .brand {
        font-size: 1.5rem;
      }
    }
  }

  .second-row {
    display: flex;
    flex-direction: column;
    .label {
      margin-top: 100px;
      width: max-content;
      font-size: 2rem;
      border-radius: 0 0 0 0 !important;
    }
    .temp {
      height: 100vh;
    }

    .products {
      display: flex;
      margin-top: 100px;
    }
  }
}

.theme--dark {
  .main-page {
    .first-row {
      border-bottom: 1px solid #d8cfc7 !important;
    }
  }
}
* {
  font-family: 'Space Mono';
}
</style>
