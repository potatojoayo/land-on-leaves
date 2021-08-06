<template>
  <div class="app-bar-cols">
    <v-menu
      content-class="btn-item"
      :close-on-content-click="false"
      transition="slide-x-transition"
      :absolute="true"
      :position-x="1520"
      :position-y="50"
    >
      <template
        #activator="{ attrs, on }"
      >
        <v-btn
          v-ripple="false"
          plain
          class="primary--text"
          v-bind="attrs"
          v-on="on"
          >{{ name }}</v-btn
        >
      </template>

      <LoginCard
        v-if="name === 'Account'"
        class="login-card"
      /><CartCard
        v-else
        class="cart-card"
      />
    </v-menu>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import LoginCard from './LoginCard.vue'
import CartCard from './CartCard.vue'
export default Vue.extend({
  components: {
    LoginCard,
    CartCard,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      expand: false,
    }
  },
})
</script>

<style  scoped>
.app-bar-cols {
  padding: 0px !important;
  display: flex;
  box-shadow: 0 0 0;
}

.btn-item {
  contain: initial;
  overflow: visible;
}

.login-card {
}
.cart-card {
}
</style>

