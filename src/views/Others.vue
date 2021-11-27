<template>
<v-container>
<v-row
      justify="space-around"
      align="center"
    >
    <v-color-picker
      v-model="picker"
      flat
    ></v-color-picker>
    </v-row>
</v-container>
</template>


<script>

  export default {
    name: 'Home',
    data: () => ({
      snackbar: false,
      text: `Opened link`,
      picker: null,
    })
  }
</script>
