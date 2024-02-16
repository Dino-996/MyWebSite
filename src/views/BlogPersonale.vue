<template>
    <v-container>
        <h1 class="text-h2 mb-3">Blog</h1>
        <v-divider></v-divider>

        <Articoli />
    </v-container>
</template>

<script lang="ts" setup>
import { provide, reactive } from 'vue'
import Articoli from '@/components/Blog/Articoli.vue'
import firestore from '@/plugins/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Article from '@/interface/Article'

const state = reactive({
    articles: [] as Article[],
    itemsPerPage: 6,
    currentPage: 1,
})

async function getArticles(): Promise<void> {
    const articles = await getDocs(collection(firestore, 'articles'))
    articles.forEach((data) => {
        if (data.exists()) {
            const article = data.data() as Article
            state.articles.push(article)
        }
    })
}

getArticles()
provide('state', state)
</script>
