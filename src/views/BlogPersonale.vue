<template>
  <!-- ARTICOLI -->
  <v-container>
    <Articoli />
    <Articolo />
  </v-container>
</template>

<script lang="ts" setup>
import { provide, reactive } from "vue";
import Articoli from "@/components/Blog/Articoli.vue";
import Articolo from "@/components/Blog/Articolo.vue";
import firestore from "@/plugins/firebase";
import { collection, getDocs } from "firebase/firestore";
import Article from "@/interface/Article";

const article_list: Array<Article> = reactive([]);

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

getArticles();
provide("articoli", article_list);
</script>
