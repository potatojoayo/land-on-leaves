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
      <v-row class="third-row ma-0 pa-0">
        <v-col class="third-row-left-col">
          <div class="slogan primary secondary--text">
            EVERYTHING'S FROM NATURE
          </div>
          <div class="primray--text sub">
            WE SUPPORT SUSTAINABLE FASHION
          </div>
          <v-btn
            class="check-out primary secondary--text pa-6"
            to="/about"
            >살펴보기</v-btn
          >
        </v-col>
        <v-col class="third-row-right-col pa-0 col-4">
          <img src="~assets/images/main.png" alt="main" />
        </v-col>
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

  .third-row {
    width: 100% !important;
    height: 100vh !important;
    border-top: 1px solid #363636;
    margin-top: 200px !important;
    overflow-y: hidden;
    .third-row-left-col {
      display: flex;
      flex-direction: column;
      border-right: 1px solid #363636;
      justify-content: center;
      align-items: center;
      .slogan {
        width: 700px;
        text-align: center;
        height: 100px;
        vertical-align: center;
        line-height: 100px;
        font-size: 2.5rem;
        margin-bottom: 50px;
      }
      .sub {
        font-size: 1.8rem;
      }
      .check-out {
        margin-top: 50px;
        font-family: 'BMHANNAPro';
        font-size: 1.7rem;
        border-radius: 0 !important;
      }
    }
  }
}

.theme--dark {
  .main-page {
    .first-row {
      border-bottom: 1px solid #d8cfc7 !important;
    }
  }
  .sub {
    color: #d8cfc7 !important;
  }
  .third-row {
    border-color: #d8cfc7;
  }
}
* {
  font-family: 'Space Mono';
}
</style>
