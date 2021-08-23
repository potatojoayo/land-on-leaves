<template>
  <div class="detail-container">
    <v-btn-toggle group>
      <div class="small-image-btn-container">
        <v-btn
          v-for="(img, index) in imgList"
          :key="index"
          v-ripple="0"
          class="small-image-btn rounded-0 selectedImg"
          elevation="0"
          color="secondary"
          @click="selectImg(index)"
          ><v-img
            class="small-image"
            max-height="150"
            max-width="150"
            :src="
              require(`../../assets/images/IndrePants-${img}.png`)
            "
          ></v-img>
        </v-btn></div
    ></v-btn-toggle>
    <div class="big-image-container">
      <v-img
        class="big-image"
        max-height="600"
        max-width="600"
        :src="
          require(`../../assets/images/IndrePants-${imgList[selectedImg]}.png`)
        "
      ></v-img>
    </div>
    <ProductItemDetailInfo></ProductItemDetailInfo>
  </div>
</template>

<script>
import ProductItemDetailInfo from './ProductItemDetailInfo.vue'
export default {
  components: {
    ProductItemDetailInfo,
  },
  props: {
    productName: { type: String, required: true },
  },
  data() {
    return {
      imgList: ['front', 'back', 'side'],
      selectedImg: 0,
    }
  },
  methods: {
    selectImg(index) {
      this.selectedImg = index
    },
  },
}
</script>

<style>
.detail-container {
  display: grid;
  grid-template-columns: 2fr 10fr 5fr;
}
.small-image-btn-container {
  display: flex;
  flex-direction: column;
  width: 12vw;
  height: 95vh;
}
.small-image-btn {
  padding: 100px 0px !important;
}

.v-btn--active.selectedImg {
  color: #d8cfc7 !important;
  background-color: #363636 !important;
}
.theme--dark .v-btn--active.selectedImg {
  color: #363636 !important;
  background-color: #d8cfc7 !important;
}

.big-image-container {
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
