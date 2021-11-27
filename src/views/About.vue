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
          About me right??
        </h1>

        <p class="subheading font-weight-regular">
          I'm Rin,
          <br>Am Coding Most of my free time,
          <br>Favorite things are code and music.
          <br>rinme#4555<br>
          </p>
          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
          <v-btn
            href="https://github.com/rinme"
            target="_blank"
            @click="snackbar = true"
            v-bind="attrs"
            v-on="on"
          >My Github Profile</v-btn>
            </template>
          <span>You will go to my github profile if you click :3</span>
          </v-tooltip>
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
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'About',
    data: () => ({
      snackbar: false,
      text: `Opened link`,
    }),

    components: {
    },
  }
</script>
