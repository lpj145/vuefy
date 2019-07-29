<script>
import {HomeIcon} from 'vue-feather-icons'
import FIcon from './shareds/FIcon'
import {routes} from '../router'

export default {
  name: 'sidebar',
  components: {
    FIcon
  },
  props: {
    value: Boolean
  },
  computed: {
    routes () {
      routes.children = routes.children.map(function(item){
        if (!item.hasOwnProperty('meta')) {
          item.meta = {}
        }

        if (!item.meta.hasOwnProperty('icon')) {
          item.meta.icon = 'AlertCircleIcon'
        }
        return item
      })

      return routes
    }
  }
}
</script>

<template>
  <v-navigation-drawer
    app
    floating
    :width="250"
    v-model="value"
    id="sidebar-app"
  >
    <v-list-item style="min-height:60px;">
      <v-list-item-content>
        <v-layout align-center>
          <v-flex class="text-center">
            <h1 class="font-weight-bold primary-text">Vue <span class="font-weight-thin">fy</span></h1>
          </v-flex>
        </v-layout>
      </v-list-item-content>
    </v-list-item>
    <v-list
      dense
    >
    <v-list-item
        v-for="router in routes.children"
        :key="router.name"
        link
        class="side-link no-hovered mb-2 text-capitalize"
        active-class="side-link-active"
        :to="`${routes.path}/${router.path}`"
      >
        <v-list-item-icon>
          <f-icon :icon="router.meta.icon" size="1.5x"></f-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{router.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
