<template>
  <v-container>
    <h2 class="text-h2">Blog</h2>
    <v-divider></v-divider>

   <div class="mt-5">
    <v-text-field v-model="searchTerm" prepend-icon="mdi-magnify" label="Cerca per titolo" variant="underlined"
      @input="searchByTitle"></v-text-field>
   </div>

    <v-radio-group v-model="sorted" inline>
      <v-label>Ordina per</v-label>
      <v-radio label="Articoli recenti" value="cre" @click="sortByDateCre"></v-radio>
      <v-radio label="Articoli remoti" value="dec" @click="sortByDateDec"></v-radio>
    </v-radio-group>

    <div v-if="displayedArticles.length > 0" class="d-flex flex-row align-center justify-space-between flex-wrap">
      <v-card v-for="article in displayedArticles" :key="article.id" class="mt-3 ml-2 mb-3 mx-auto" max-width="344">
        <v-img :lazy-src="article.preview" :src="article.preview" height="200px" cover></v-img>
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
          <v-btn append-icon="mdi-arrow-u-right-bottom" @click="
            $router.push({ name: 'Articolo', params: { id: article.id } })
            ">Leggi di più</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div v-else>
      <p>Nessun articolo</p>
    </div>
    <v-pagination v-model="state.currentPage" :length="totalPages" @input="loadArticles" rounded="circle"></v-pagination>
  </v-container>
</template>

<script lang="ts" setup>
import { inject, reactive, computed, onMounted, watch, ref, watchEffect } from "vue";
import Article from "@/interface/Article";

const sorted = ref<string>("cre");

const state = inject("state", reactive({
  articles: [],
  itemsPerPage: 6,
  currentPage: 1,
})) as { articles: Article[], itemsPerPage: number, currentPage: number };

const displayedArticles = reactive([] as Article[]);

const totalPages = computed(() => Math.ceil(state.articles.length / state.itemsPerPage));

const loadArticles = () => {
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  displayedArticles.length = 0;
  displayedArticles.push(...state.articles.slice(startIndex, endIndex));
};

onMounted(() => {
  loadArticles();
});

watch(() => [state.articles.length, state.currentPage], () => {
  loadArticles();
});

// ORDINAMENTO
const parseDateString = (dateString: string) => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const sortByDateCre = () => {
  sorted.value = "cre";
  state.articles.sort((a, b) => parseDateString(a.date).getTime() - parseDateString(b.date).getTime());
  loadArticles();
};

const sortByDateDec = () => {
  sorted.value = "dec";
  state.articles.sort((a, b) => parseDateString(b.date).getTime() - parseDateString(a.date).getTime());
  loadArticles();
};

// RICERCA PER TITOLO
const searchTerm = ref<string>("");
// Funzione per filtrare gli articoli in base al termine di ricerca
const filterByTitle = (article: Article) => {
  return article.title.toLowerCase().includes(searchTerm.value.toLowerCase());
};
// Funzione per ottenere gli articoli filtrati in base al termine di ricerca
const filteredArticles = computed(() => {
  // Filtra gli articoli in base al termine di ricerca
  return state.articles.filter(filterByTitle);
});

// Imposta la variabile displayedArticles in base agli articoli filtrati
watchEffect(() => {
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  displayedArticles.splice(0, displayedArticles.length, ...filteredArticles.value.slice(startIndex, endIndex));
});
const searchByTitle = () => {
  loadArticles(); // Ricarica gli articoli dopo la ricerca
};
</script>
