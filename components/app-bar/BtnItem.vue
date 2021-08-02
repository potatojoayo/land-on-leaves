<template>
  <div class="app-bar-cols">
    <v-btn
      v-ripple="false"
      plain
      class="primary--text"
      @click="toggleCard($event)"
      >{{ name }}</v-btn
    >
    <v-scale-transition
      origin="top right"
    >
      <LoginCard
        v-if="
          name === 'Account' && expand
        "
        class="login-card"
      />
    </v-scale-transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginCard from './LoginCard.vue'
export default Vue.extend({
  components: {
    LoginCard,
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
  methods: {
    toggleCard(e: Event) {
      e.stopPropagation()
      this.expand = !this.expand
      const onOutsideClick = (
        ev: Event
      ) => {
        const card =
          document.querySelector(
            '.login-card'
          ) ||
          document.querySelector(
            '.cart-card'
          )

        if (
          !card!.contains(
            ev.target as Element
          )
        ) {
          this.expand = false
        }
      }

      if (this.expand) {
        window.addEventListener(
          'click',
          onOutsideClick
        )
      } else {
        window.removeEventListener(
          'click',
          onOutsideClick
        )
      }
    },
  },

  head: {
    meta: [
      {
        name: 'csrf-token',
        content: '{{ csrf_token() }}',
      },
    ],
  },
})
</script>

<style  scoped>
.app-bar-cols {
  padding: 0px !important;
  display: flex;
  flex-direction: column;
}
.login-card {
  position: absolute;
  right: 90px;
  top: 40px;
}
</style>

