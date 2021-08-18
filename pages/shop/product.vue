<template>
  <div>
    <ProductItemDetail
      :productName="indrePants"
    ></ProductItemDetail>
  </div>
</template>

<script>
import ProductItemDetail from '../../components/product/ProductItemDetail.vue'
export default {
  data() {
    return {
      indrePants: 'indrePants',
    }
  },
  components: {
    ProductItemDetail,
  },
  mounted() {},
}
</script>

<style></style>
