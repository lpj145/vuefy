<script>
import {HomeIcon} from 'vue-feather-icons'
import FIcon from './shareds/FIcon'

export default {
  name: 'sidebar',
  components: {
    FIcon
  },
  props: {
    value: Boolean
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
        link
        class="side-link no-hovered mb-2"
        active-class="side-link-active"
        to="/"
        href="/"
      >
        <v-list-item-icon>
          <f-icon icon="HomeIcon" size="1.5x"></f-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        class="side-link no-hovered"
        active-class="side-link-active mb-2"
        to="/dashboard"
        href="/dashboard"
      >
        <v-list-item-icon>
          <f-icon icon="ActivityIcon" size="1.5x"></f-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        class="side-link no-hovered"
        active-class="side-link-active mb-2"
        to="/charts"
        href="/charts"
      >
        <v-list-item-icon>
          <f-icon icon="PieChartIcon" size="1.5x"></f-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Charts</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        class="side-link no-hovered"
        active-class="side-link-active mb-2"
        to="/notifications"
        href="/notifications"
      >
        <v-list-item-icon>
          <f-icon icon="StarIcon" size="1.5x"></f-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Notifications</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
