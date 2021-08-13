<template>
  <div class="detail-container">
    <div class="small-image-btn-container">
      <v-btn
        v-for="(img, index) in imgList"
        :key="index"
        class="small-image-btn rounded-0"
        elevation="0"
        color="secondary"
        ><v-img
          class="small-image"
          max-height="100"
          max-width="100"
          :src="
            require(`../../assets/images/IndrePants-${img}.png`)
          "
        ></v-img>
      </v-btn>
    </div>
    <div class="big-image-container">
      <v-img
        class="big-image"
        max-height="500"
        max-width="500"
        :src="
          require(`../../assets/images/IndrePants-${imgList[0]}.png`)
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
    }
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
  width: 10vw;
  height: 95vh;
}
.small-image-btn {
  width: 100%;
  height: 100%;
  padding: 50px 30px !important;
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
