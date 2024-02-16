<template>
  <v-container>
    <v-card class="text-center" elevation="0" color="transparent">

      <v-card-title>
        <h1>404 - OOOPS!</h1>
      </v-card-title>

      <v-card-item class="d-flex justify-center">
        <v-img :src="link" width="200" height="100" cover></v-img>
      </v-card-item>

      <v-card-text>
        <p class="mt-3 mb-3 pl-5 pr-5">
          La pagina che stai cercando potrebbe essere stata rimossa, ha
          cambiato nome o è temporaneamente non disponibile.
        </p>
      </v-card-text>

      <v-card-actions class="align-center">
        <v-btn prepend-icon="mdi-home" variant="outlined" rounded="xl" @click.once="$router.push('/')">Torna alla
          home</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
const link: string = "https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Ferror404.gif?alt=media&token=5439b5ed-232b-456b-b5d1-5d3022ea6bfa";
</script>
