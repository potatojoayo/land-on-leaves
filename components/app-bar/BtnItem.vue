<template>
  <div class="app-bar-cols">
    <v-menu
      content-class="btn-item"
      :close-on-content-click="false"
      transition="slide-x-transition"
      :absolute="true"
      :position-y="50"
      max-width="100vw"
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

<style  scoped lang="scss">
.app-bar-cols {
  padding: 0px !important;
  display: flex;
  box-shadow: 0 0 0 !important;
}

.btn-item {
  contain: initial;
  overflow: visible;
  /*어거지로 패딩으로 가리는 효과를 입혔다ㅠㅠㅠ*/
  padding: 0 85px 0 0 !important;

  box-shadow: 0 0 0 !important;
}
.theme--dark {
  .btn-item {
    box-shadow: 0 0 0 !important;
  }
}
.login-card {
}
.cart-card {
}
</style>

