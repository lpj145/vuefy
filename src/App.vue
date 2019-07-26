<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default {
  components: {
    Sidebar,
    Navbar
  },
  data () {
    return {
      sideOpen: true,
      sideBackground: 'https://picsum.photos/id/1015/6000/4000.jpg'
    }
  }
}
</script>


<template>
  <v-app>
    <sidebar v-model="sideOpen"></sidebar>
    <navbar @close-sidebar="sideOpen = !sideOpen"></navbar>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid grid-list-xl>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
