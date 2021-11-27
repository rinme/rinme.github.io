<template>
  <v-container>
    <v-row
      justify="space-around"
      align="center"
    >
    <v-img
      max-height="494"
      max-width="350"
      :src="`https://cdn.discordapp.com/attachments/857531883033985064/893434978237575179/cover.png`"
      :lazy-src="`https://cdn.discordapp.com/attachments/857531883033985064/893434978237575179/cover.png`"
      class="grey lighten-2"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular><br>
        </v-row>
      </template>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://nhentai.net/g/266402/"
              target="_blank"
              @click="snackbar = true"
              v-bind="attrs"
              v-on="on"
            >Check out</v-btn>
          </template>
            <span>huh?</span>
        </v-tooltip>
    </v-img>

    <v-img
      max-height="494"
      max-width="350"
      :src="`https://cdn.discordapp.com/attachments/857531883033985064/893440872224546826/cover.png`"
      :lazy-src="`https://cdn.discordapp.com/attachments/857531883033985064/893440872224546826/cover.png`"
      class="grey lighten-2"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular><br>
        </v-row>
      </template>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://nhentai.net/g/277865/"
              target="_blank"
              @click="snackbar = true"
              v-bind="attrs"
              v-on="on"
            >Check out</v-btn>
          </template>
            <span>huh?</span>
        </v-tooltip>
    </v-img>

    <v-img
      max-height="494"
      max-width="350"
      :src="`https://cdn.discordapp.com/attachments/857531883033985064/893441175959253022/cover.png`"
      :lazy-src="`https://cdn.discordapp.com/attachments/857531883033985064/893441175959253022/cover.png`"
      class="grey lighten-2"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular><br>
        </v-row>
      </template>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              href="https://nhentai.net/g/206022/"
              target="_blank"
              @click="snackbar = true"
              v-bind="attrs"
              v-on="on"
            >Check out</v-btn>
          </template>
            <span>huh?</span>
        </v-tooltip>
    </v-img>

    </v-row>
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
  </v-container>
</template>


<script>

  export default {
    name: 'Sauce',
    data: () => ({
      snackbar: false,
      text: `Opened link`,
      picker: null,
    })
  }
</script>
