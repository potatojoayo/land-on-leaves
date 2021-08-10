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
          />
        </v-col>
        <v-col class="first-row-right-col">
          <div class="name">Pasley Dress</div>
          <div class="brand">Christy Dawn</div>
          <v-btn
            color="primary"
            class="secondary--text pt-2 pb-2"
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
        <div class="temp"></div>
      </v-row>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang='scss' scoped>
.main-page {
  .first-row {
    .first-row-right-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

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
      background: red;
      width: max-content;
      font-size: 2rem;
      border-radius: 0 0 0 0 !important;
    }
    .temp {
      height: 100vh;
    }
  }
}
</style>
