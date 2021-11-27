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
          Links
        </h1>

        <p class="subheading font-weight-regular">
          This page keep link of my favorite sites
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
          <v-btn
            href="https://mail.yahoo.com"
            target="_blank"
            @click="snackbar = true"
            v-bind="attrs"
            v-on="on"
          >Yahoo's Mail</v-btn>
            <v-btn
            href="https://youtube.com"
            target="_blank"
            @click="snackbar = true"
            v-bind="attrs"
            v-on="on"
          >Youtube</v-btn>
          <v-btn
            href="https://monkeytype.com/"
            target="_blank"
            @click="snackbar = true"
            v-bind="attrs"
            v-on="on"
          >Monkey Type</v-btn>
          <v-btn
            href="https://here.fm/"
            target="_blank"
            @click="snackbar = true"
            v-bind="attrs"
            v-on="on"
          >Here</v-btn>
          <v-btn
            href="https://translate.google.com/"
            target="_blank"
            @click="snackbar = true"
            v-bind="attrs"
            v-on="on"
          >Google Translate</v-btn>
          <v-btn
            href="https://www.netflix.com/browse"
            target="_blank"
            @click="snackbar = true"
            v-bind="attrs"
            v-on="on"
          >Netflix</v-btn>
          </template>
          <span>You will go to Link :3</span>
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
    name: 'Link',
    data: () => ({
      snackbar: false,
      text: `Opened link`,
    }),

    components: {
    },
  }
</script>
