
<template>
  <div class="app-bar-cols cart-button">
    <v-btn
      v-ripple="false"
      plain
      class="primary--text"
      @click.stop="toggle()"
      >Cart</v-btn
    >
    <v-scale-transition origin="top right">
      <CartCard v-show="isOpen" class="cart-card" />
    </v-scale-transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import CartCard from './CartCard.vue'
export default Vue.extend({
  components: {
    CartCard,
  },
  computed: {
    ...mapGetters({ isOpen: 'app-bar/isCartCardOpen' }),
  },
  methods: {
    ...mapActions({ toggle: 'app-bar/toggleCartCard' }),
  },
})
</script>

<style  scoped>
.app-bar-cols {
  padding: 0px !important;
  display: flex;
  flex-direction: column;
}
</style>

