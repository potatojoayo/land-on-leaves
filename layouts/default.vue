<template>
  <v-app>
    <v-app-bar
      clipped-left
      app
      color="secondary"
      height="50"
      flat
      :class="{
        dark: isDark,
        light: !isDark,
      }"
    >
      <v-app-bar-nav-icon
        v-show="$vuetify.breakpoint.mobile"
        color="primary"
        @click="drawer = !drawer"
      />
      <v-app-bar-title class="pa-0">
        <v-btn
          v-ripple="false"
          text
          to="/"
          class="title primary--text"
          >LANDONLEAVES</v-btn
        >
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-tabs
        centered
        height="40%"
        slider-size="1.5"
        slider-color="primary"
      >
        <TabItem
          v-for="tabItem in tabItems"
          :key="tabItem.name"
          :item="tabItem"
        />
      </v-tabs>
      <div class="app-bar-btns">
        <v-btn
          v-ripple="false"
          class="bulb"
          icon
          plain
          @click="toggleTheme()"
          ><v-icon>mdi-lightbulb</v-icon></v-btn
        >
        <AccountButton />
        <CartButton />
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-if="$nuxt.$route.path.toString().includes('/shop')"
      v-model="drawer"
      clipped
      app
      color="secondary"
    >
      <v-autocomplete
        class="navigation-search-bar"
        prepend-inner-icon="mdi-magnify"
        hide-details="true"
        placeholder="상품검색"
        flat
      >
      </v-autocomplete>
      <v-list
        ><GroupItem
          v-for="groupItem in groupItems"
          :key="groupItem.title"
          :item="groupItem"
        />
      </v-list>
    </v-navigation-drawer>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app color="primary secondary--text">
      ©2021 LAND ON LEAVES all right reserved
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import TabItem from '../components/app-bar/TabItem.vue'
import GroupItem from '../components/navigation-drawer/GroupItem.vue'
import AccountButton from '../components/app-bar/AccountButton.vue'
import CartButton from '../components/app-bar/CartButton.vue'

export default Vue.extend({
  components: {
    TabItem,
    GroupItem,
    AccountButton,
    CartButton,
  },
  data() {
    return {
      drawer: true,
      tabItems: [
        { name: 'Home', to: '/' },
        { name: 'Shop', to: '/shop' },
        { name: 'About', to: '/about' },
      ],
      groupItems: [
        {
          title: 'CATEGORY',
          children: [
            { name: 'ALL' },
            { name: 'TOPS' },
            { name: 'BOTTOMS' },
            { name: 'DRESSES' },
            { name: 'ACCESSORIES' },
            { name: 'SHOES' },
            { name: 'SWIMWEARS' },
          ],
        },
        {
          title: 'BRANDS',
          children: [{ name: 'Christy' }],
        },
        {
          title: 'STANDARDS',
          children: [{ name: 'Vegan' }],
        },
      ],
    }
  },

  computed: {
    isDark(): boolean {
      return this.$vuetify.theme.dark
    },
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
})
</script>
<style lang='scss'>
.navigation-search-bar {
  padding-top: 0;
}

.v-list {
  padding: 0;
}

.v-tabs {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  margin: auto !important;
  width: max-content !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.v-tab::before {
  display: none !important;
}

.v-tab {
  margin: 0 5px;
}
.v-btn::before {
  display: none;
}
.v-btn {
  padding: 0px !important;
}
.title {
  font-size: 2rem;
  font-family: 'Space Mono' !important;
  font-weight: bold !important;
}
.app-bar-btns {
  position: absolute !important;
  top: 8px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: start;
}
.mdi-lightbulb {
  top: -5px;
}

.v-main {
  background: #d8cfc7;
}

.theme--dark {
  .v-main {
    background: #363636;
  }
}

.v-toolbar__content {
  border-bottom: 1px solid #363636;
}

.theme--dark {
  .v-toolbar__content {
    border-bottom: 1px solid #d8cfc7;
  }
  .v-icon {
    color: #d8cfc7 !important;
  }
}
.v-footer {
  display: flex;
  justify-content: center;
  font-family: 'Space Mono';
  font-size: 0.9rem;
}

body {
  background: #363636;
}
</style>
