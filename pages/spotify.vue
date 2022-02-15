<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="80">
      <v-card class="logo py-4 d-flex justify-center">
      </v-card>
      <v-card>
        <iframe :src="FCL + RCL"
        width="100%"
        height="480"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
        <v-card-actions>
          <v-spacer />
        </v-card-actions>
      </v-card>
      <v-card>
          <v-text-field
            hint="https://open.spotify.com/embed/playlist/"
            v-model="RCL"
            outlined
            clearable
            dense
            />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SpotifyPage',

  data: () => ({
    RCL: '2thFDUBS363P5tOZzTCRvf',
    FCL: 'https://open.spotify.com/embed/playlist/'
  })
}
</script>
