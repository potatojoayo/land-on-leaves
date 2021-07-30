<template>
  <v-list-group
    :class="{ dark: isDark }"
  >
    <template #activator>
      <v-list-item-content>
        <v-list-item-title
          class="primary--text"
          >{{
            item.title
          }}</v-list-item-title
        >
      </v-list-item-content>
    </template>
    <v-list-item
      v-for="child in item.children"
      :key="child.name"
      :to="`/product/${child.name}`"
      active-class="nav-active"
      :class="{ dark: isDark }"
    >
      {{ child.name }}
    </v-list-item>
  </v-list-group>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
interface GroupItemProps {
  title: string
  children: {
    name: string
  }[]
}
export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true,
    } as PropOptions<GroupItemProps>,
  },

  computed: {
    isDark(): boolean {
      return this.$vuetify.theme.dark
    },
  },
})
</script >

<style lang="scss" scoped>
.v-list-item__title {
  font-size: 1.2rem;
  font-weight: bold;
}
.v-list-item {
  min-height: 0 !important;
  height: 30px !important;
}
.nav-active.dark {
  background-color: #d8cfc7;
  color: #363636 !important;
}
.nav-active {
  background-color: #363636;
  color: #d8cfc7 !important;
}

.v-list-group.dark {
  border-bottom: 1px solid #d8cfc7 !important;
}
.v-list-group {
  border-bottom: 1px solid #707070 !important;
}
</style>
