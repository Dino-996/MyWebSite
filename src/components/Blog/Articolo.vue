<template>
  <v-container>
    <div v-for="article in article_list" :key="article.id">
      <div v-if="isId(article.id.toString())">
        <v-card density="comfortable" :prepend-avatar="article.avatar" :title="article.title">
          <v-divider></v-divider>
          <v-card-item>
            <v-card-title>
              <h5>{{ article.subtitle }}</h5>
            </v-card-title>
            <span>{{ article.date }}</span>
          </v-card-item>
          <v-img :lazy-src="article.preview" :src="article.preview" height="200px" cover>
          </v-img>
          <v-card-item>
            <v-card-text>
              {{ article.text }}
            </v-card-text>
            <v-card-actions class="align-left">
              <v-btn append-icon="mdi-linkedin" :href="article.link" target="_blank">Leggi l'articolo completo</v-btn>
            </v-card-actions>
          </v-card-item>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute, RouteLocationNormalizedLoaded } from "vue-router";
import firestore from "@/plugins/firebase";
import { getDocs, collection } from "firebase/firestore";
import Article from "@/interface/Article";

const article_list: Array<Article> = reactive([]);
const route: RouteLocationNormalizedLoaded = useRoute();

async function getArticles(): Promise<void> {
  const articles = await getDocs(collection(firestore, "articles"));
  articles.forEach((data) => {
    if (data.exists()) {
      const article = data.data() as Article;
      const article_object = {
        id: article.id,
        title: article.title,
        subtitle: article.subtitle,
        preview: article.preview,
        avatar: article.avatar,
        text: article.text,
        author: article.author,
        date: article.date,
        link: article.link,
      };
      article_list.push(article_object);
    }
  });
}

function isId(id: string): boolean {
  return id === route.params.id ? true : false;
}

getArticles();
</script>
