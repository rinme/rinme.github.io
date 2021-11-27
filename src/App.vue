<template>
  <v-app>
    <v-app-bar
      app
      :color="color"
      dark
      dense
      :collapse="true"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Navbar Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.jpg')"
          transition="scale-transition"
          width="55"
        />
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
      
      <v-alert
      outlined
      type="warning"
      dense
      border="left"
    >
    Made in Vue.js
    </v-alert>
      <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
  >    
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="about">
      <span>About Me</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn to="sauce">
      <span>Sauces</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>
    <v-btn to="others">
      <span>Others</span>
      <v-icon>mdi-water</v-icon>
    </v-btn>
    <v-btn to="links">
      <span>Links</span>
      <v-icon>mdi-link</v-icon>
    </v-btn>

<v-bottom-sheet
      v-model="sheet"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          fab
        >
        Spotify
          <v-icon>mdi-music-box</v-icon>
        </v-btn>
      </template>
      <v-sheet
        class="text-center"
        height="300px"
      >
          <div>
          <v-text-field
            hint="https://open.spotify.com/embed/playlist/"
            v-model="vtf"
            outlined
            clearable
            dense
          >
          <template v-slot:label>
          Paste random text in link Here <strong>(ex. 2thFDUBS363P5tOZzTCRvf)</strong> <v-icon style="vertical-align: middle">
            mdi-file-find
          </v-icon>
        </template></v-text-field>
          </div>
          <iframe :src="linkd + vtf" width="100%" height="225" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </v-sheet>
    </v-bottom-sheet>
  </v-bottom-navigation>
  
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    value: 1,
    active: true,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    sheet: false,
    vtf: "2thFDUBS363P5tOZzTCRvf",
    linkd: "https://open.spotify.com/embed/playlist/",
  }),
  computed: {
    color () {
      switch (this.value) {
          case 0: return 'purple'
          case 1: return 'pink'
          case 2: return '#FF7F7FFF'
          case 3: return '#D9FD6CFF'
          case 4: return '#6FF068FF'
          default: return 'pink'
          }
        },
      },
};

</script>
