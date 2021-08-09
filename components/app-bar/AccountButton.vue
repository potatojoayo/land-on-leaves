<template>
  <div class="app-bar-cols account-button">
    <v-btn
      v-ripple="false"
      plain
      class="primary--text"
      @click.stop="toggle()"
      >Account</v-btn
    >
    <v-scale-transition origin="top right">
      <LoginCard v-show="isOpen" class="login-card" />
    </v-scale-transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import LoginCard from './LoginCard.vue'
export default Vue.extend({
  components: {
    LoginCard,
  },
  computed: {
    ...mapGetters({ isOpen: 'app-bar/isLoginCardOpen' }),
  },
  methods: {
    ...mapActions({ toggle: 'app-bar/toggleLoginCard' }),
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

