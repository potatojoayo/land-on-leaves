<template>
  <v-app>
    <v-navigation-drawer
      clipped
      permanent
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
      <v-app-bar-title>
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
          icon
          plain
          @click="toggleTheme()"
          ><v-icon
            >mdi-lightbulb</v-icon
          ></v-btn
        >

        <BtnItem
          v-for="btnItem in btnItems"
          :key="btnItem"
          :name="btnItem"
        ></BtnItem>
      </div>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import TabItem from '../components/app-bar/TabItem.vue'
import BtnItem from '../components/app-bar/BtnItem.vue'
import GroupItem from '../components/navigation-drawer/GroupItem.vue'

export default Vue.extend({
  components: {
    TabItem,
    BtnItem,
    GroupItem,
  },
  data() {
    return {
      tabItems: [
        { name: 'Home', to: '/' },
        { name: 'Shop', to: '/shop' },
        { name: 'About', to: '/about' },
      ],
      btnItems: ['Account', 'Cart'],
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
          children: [
            { name: 'Christy' },
          ],
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
      this.$vuetify.theme.dark =
        !this.$vuetify.theme.dark
    },
  },
})
</script>
<style scoped>
.v-app-bar.dark {
  border-bottom: 1px solid #d8cfc7 !important;
  z-index: 10 !important;
}
.v-app-bar.light {
  border-bottom: 1px solid #707070 !important;
  z-index: 10 !important;
}
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
</style>
