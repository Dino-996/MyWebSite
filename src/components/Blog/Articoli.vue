<template>
  <v-container
    class="d-flex flex-wrap flex-row align-center justify-space-evenly"
  >
    <v-card
      v-for="article in articles"
      :key="article.id"
      class="mt-3 ml-2 mb-3 mx-auto"
      max-width="344"
    >
      <v-img
        :lazy-src="article.preview"
        :src="article.preview"
        height="200px"
        cover
      ></v-img>
      <v-card-item>
        <v-card-title>
          {{ article.title }}
        </v-card-title>
      </v-card-item>
      <v-card-item density="compact" :prepend-avatar="article.avatar">
        <v-card-subtitle>
          {{ article.author }}
          -
          {{ article.date }}
        </v-card-subtitle>
      </v-card-item>
      <v-card-text>
        {{ article.subtitle }}
      </v-card-text>
      <v-card-actions class="align-left">
        <v-btn
          append-icon="mdi-arrow-u-right-bottom"
          @click="
            $router.push({ name: 'Articolo', params: { id: article.id } })
          "
          >Leggi di più</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive, inject } from "vue";

const articles: any = reactive(inject<Function>("articoli", () => {}));
</script>
