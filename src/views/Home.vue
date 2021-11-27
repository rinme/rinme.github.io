<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Rin's Page
        </h1>

        <p class="subheading font-weight-regular">
          This page is my education page,
          <br>Am learning Vue.js<br>
              <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      snackbar: false,
      text: `Opened link`,
    })
  }
</script>
