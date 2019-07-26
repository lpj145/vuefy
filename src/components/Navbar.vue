<script>
import FIcon from './shareds/FIcon'

export default {
  name: 'navbar',
  components: {
    FIcon
  },
  methods: {
    closeSidebarEvent () {
      this.$emit('close-sidebar', false)
    }
  }
}
</script>


<template>
  <v-app-bar app elevate-on-scroll color="#5e72e4" dark max-height="60">
    <v-btn @click="closeSidebarEvent" icon small :ripple="false" class="no-hovered">
      <f-icon icon="MenuIcon" size="1.5x"></f-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn class="no-hovered" icon :ripple="false" v-show="false">
        <f-icon icon="SearchIcon" size="1.5x"></f-icon>        
      </v-btn>
      <v-btn class="no-hovered" icon :ripple="false" v-show="false">
        <f-icon icon="BellIcon" size="1.5x"></f-icon>
      </v-btn>
      <v-menu offset-y min-width="250" transition="slide-y-transition" class="elevation-0">
        <template v-slot:activator="{on}">
          <v-btn v-on="on" class="no-hovered" icon :ripple="false">
            <f-icon icon="MessageCircleIcon" size="1.5x"></f-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="i in 5" :key="i" @click="">
            <v-list-item-avatar>
              <v-img :src="`https://randomuser.me/api/portraits/men/${i}.jpg`"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Example Message</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y transition="slide-y-transition" bottom left class="elevation-0">
        <template v-slot:activator="{on}">
          <v-btn class="no-hovered body-2" v-on="on" text :ripple="false">Marcos Dantas</v-btn>
        </template>
        <v-list elevation-0>
          <v-list-item
            @click=""
          >
            <v-list-item-icon class="mr-2"><f-icon icon="Edit3Icon" size="1x"></f-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Edit Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            @click=""
          >
            <v-list-item-icon class="mr-2"><f-icon icon="SettingsIcon" size="1x"></f-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            @click=""
          >
            <v-list-item-icon class="mr-2"><f-icon icon="LogOutIcon" size="0.9x"></f-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-toolbar-items>
  </v-app-bar>
</template>
