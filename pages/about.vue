<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <ChairLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the About Page
        </v-card-title>
        <v-card-text>
          <p>Hey, My name is Rinme, I'm 16 girl, 23, Aug is my birthday</p>
          <p>I'm making Discord Bot, WebPage and Minecraft mod sometimes</p>
          <br>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/spotify"
          >
            Listen to spotify
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
