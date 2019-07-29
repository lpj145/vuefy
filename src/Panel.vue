<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default {
  name: 'panel-app',
  components: {
    Sidebar,
    Navbar
  },
  data () {
    return {
      sideOpen: true      
    }
  }
}
</script>

<template>
  <div>
    <sidebar v-model="sideOpen"></sidebar>
    <navbar @toggle-sidebar="sideOpen = !sideOpen"></navbar>
    <v-content>
      <v-container fluid grid-list-xl style="padding:1.1em;">
        <router-view></router-view>
      </v-container>
    </v-content>
  </div>
</template>

