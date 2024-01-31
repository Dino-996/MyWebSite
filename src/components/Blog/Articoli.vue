<template>
    <v-container>
        <div class="mt-5">
            <v-text-field
                v-model="searchTerm"
                prepend-icon="mdi-magnify"
                label="Cerca per titolo"
                variant="underlined"
                :rules="titleRules"
                @input="searchByTitle"
            ></v-text-field>
        </div>

        <div class="text-start">
            <v-radio-group v-model="sorted" inline>
                <v-radio
                    label="Articoli remoti"
                    value="cre"
                    @click="sortByDateCre"
                ></v-radio>
                <v-radio
                    label="Articoli recenti"
                    value="dec"
                    @click="sortByDateDec"
                ></v-radio>
            </v-radio-group>
        </div>

        <v-container
            v-if="displayedArticles.length > 0"
            class="d-flex flex-row align-center justify-center flex-wrap"
        >
            <v-card
                v-for="article in displayedArticles"
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
                        @click="getArticle(article.id)"
                        >Leggi di pi&ugrave;</v-btn
                    >
                </v-card-actions>
            </v-card>
        </v-container>
        <v-container v-else>
            <p>
                Sembra che non ci siano articoli che corrispondano a "{{
                    `${searchTerm}`
                }}". Prova con un termine di ricerca diverso.
            </p>
        </v-container>
        <v-pagination
            v-model="state.currentPage"
            :length="totalPages"
            @input="loadArticles"
            rounded="circle"
        ></v-pagination>
    </v-container>
</template>

<script lang="ts" setup>
import {
    inject,
    reactive,
    computed,
    onMounted,
    watch,
    ref,
    watchEffect,
} from 'vue'
import Article from '@/interface/Article'
import router from '@/router'
import onTop from '@/utils/onTop'

const titleRules = [
    () => searchTerm.value.length <= 30 || 'Puoi inserire massimo 30 caratteri',
]
const searchTerm = ref<string>('')
const sorted = ref<string>('cre')
const state = inject(
    'state',
    reactive({
        articles: [],
        itemsPerPage: 6,
        currentPage: 1,
    })
) as { articles: Article[]; itemsPerPage: number; currentPage: number }

const displayedArticles = reactive([] as Article[])

const totalPages = computed(() =>
    Math.ceil(state.articles.length / state.itemsPerPage)
)

const loadArticles = () => {
    const startIndex = (state.currentPage - 1) * state.itemsPerPage
    const endIndex = startIndex + state.itemsPerPage
    displayedArticles.length = 0
    displayedArticles.push(...state.articles.slice(startIndex, endIndex))
}

onMounted(() => {
    loadArticles()
})

watch(
    () => [state.articles.length, state.currentPage],
    () => {
        loadArticles()
    }
)

const parseDateString = (dateString: string) => {
    const [day, month, year] = dateString.split('/').map(Number)
    return new Date(year, month - 1, day)
}

const sortByDateCre = () => {
    sorted.value = 'cre'
    state.articles.sort(
        (a, b) =>
            parseDateString(a.date).getTime() -
            parseDateString(b.date).getTime()
    )
    loadArticles()
}

const sortByDateDec = () => {
    sorted.value = 'dec'
    state.articles.sort(
        (a, b) =>
            parseDateString(b.date).getTime() -
            parseDateString(a.date).getTime()
    )
    loadArticles()
}

const filterByTitle = (article: Article) => {
    return article.title.toLowerCase().includes(searchTerm.value.toLowerCase())
}

const filteredArticles = computed(() => {
    return state.articles.filter(filterByTitle)
})

watchEffect(() => {
    const startIndex = (state.currentPage - 1) * state.itemsPerPage
    const endIndex = startIndex + state.itemsPerPage
    displayedArticles.splice(
        0,
        displayedArticles.length,
        ...filteredArticles.value.slice(startIndex, endIndex)
    )
})

const searchByTitle = () => {
    loadArticles()
}

const getArticle = (articleId: string) => {
    router.push({ name: 'Articolo', params: { id: articleId } })
    onTop()
}
</script>
