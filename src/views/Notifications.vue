<script>
export default {
  name: 'notifications',
  methods: {
    showAlert(){
        // Use sweetalert2
        this.$swal('Hello Vue world!!!');
    },
    showSuccess () {
      this.$swal.fire('You is a success person!', '', 'success')
    },
    showError () {
      this.$swal.fire('Whats going wrong ?', '', 'error')
    }
  }
}
</script>

<template>
  <v-layout wrap>
    <v-container>
      <v-flex xs12 md12>
        <v-card>
          <v-card-title primary-title class="mb-4">
            Notifications - <span class="body-2 ml-2">Notify by push button</span>
          </v-card-title>
          <v-card-text>
            <p>This alerts is based on sweet alerts!</p>
            <v-btn depressed class="mr-2" @click="showAlert" >Simple</v-btn>
            <v-btn depressed class="mr-2" @click="showSuccess" color="success">Success</v-btn>
            <v-btn depressed class="mr-2" @click="showError" color="error">Wrong</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>
