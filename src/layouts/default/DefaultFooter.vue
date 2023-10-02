<template>
  <v-footer class="text-center d-flex flex-column">

    <div>
      <v-btn variant="text" class="mx-4" v-for="social in socials" :key="social.id" rounded="xl" :icon="social.img" role="link" target="_blank" :href="social.link"></v-btn>
    </div>

    <v-divider></v-divider>

    <div class="pt-0">
      Work in progress..
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong><a href="https://github.com/Dino-996" target="_blank">&spades; Dino-996
          &hearts; </a></strong>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

let socials = reactive([
  { id: 0, img: "mdi-linkedin", link: "https://it.linkedin.com/in/davidesabia" },
  { id: 1, img: "mdi-github", link: "https://github.com/Dino-996" },
]);
</script>
