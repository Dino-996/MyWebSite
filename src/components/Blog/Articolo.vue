<template>
    <v-container>
        <div v-for="article in article_list" :key="article.id">
            <div
                v-if="article.id.toString() === route.params.id ? true : false"
            >
                <v-card density="comfortable" color="transparent" elevation="0">
                    <v-divider></v-divider>

                    <v-img
                        :lazy-src="article.preview"
                        :src="article.preview"
                        cover
                    ></v-img>

                    <v-card-item>
                        <v-card-text>
                            <div
                                class="d-flex flex-wrap align-center justify-space-between"
                            >
                                <div>
                                    <v-avatar>
                                        <v-img
                                            :src="article.avatar"
                                            :lazy-src="article.avatar"
                                            :alt="article.author"
                                        >
                                        </v-img>
                                    </v-avatar>
                                    {{ article.author }}
                                </div>
                                <div>
                                    <v-icon size="small" class="mr-3"
                                        >mdi-calendar</v-icon
                                    >{{ article.date }}
                                </div>
                            </div>
                        </v-card-text>
                    </v-card-item>

                    <v-card-item>
                        <v-card-text>
                            <div v-html="filtraArticolo"></div>
                        </v-card-text>
                        <v-card-actions class="align-left">
                            <v-btn
                                icon="mdi-linkedin"
                                :href="article.link"
                                target="_blank"
                                size="large"
                                rounded="lg"
                            ></v-btn>
                        </v-card-actions>
                    </v-card-item>
                </v-card>
            </div>
        </div>
    </v-container>

    <v-container>
        <comment />
    </v-container>
</template>

<script lang="ts" setup>
import { reactive, computed, ref } from 'vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
import firestore from '@/plugins/firebase'
import { getDocs, collection } from 'firebase/firestore'
import Article from '@/interface/Article'
import Comment from '../Comment.vue'

const article_list: Array<Article> = reactive([])
const route: RouteLocationNormalizedLoaded = useRoute()

async function getArticles(): Promise<void> {
    const articles = await getDocs(collection(firestore, 'articles'))
    articles.forEach((data) => {
        if (data.exists()) {
            const article = data.data() as Article
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
            }
            article_list.push(article_object)
        }
    })
}

getArticles()

function isId(id: string): boolean {
    return id === route.params.id ? true : false
}

const filtraArticolo = computed(() => {
    let testoArticolo = ref('')
    article_list.forEach((article) => {
        !isId(article.id.toString())
            ? console.log(
                  `Id articolo: ${article.id.toString()} - isId: ${isId(
                      article.id.toString()
                  )}`
              )
            : (testoArticolo.value = article.text)
    })
    return testoArticolo.value.replace(
        /(Titolo|Sottotitolo|Paragrafo|Immagine|Link|Elenco|Citazione|Codice|Grassetto|Corsivo|Video|Acapo): (.*?)(?=(Titolo|Sottotitolo|Paragrafo|Immagine|Link|Elenco|Citazione|Codice|Grassetto|Corsivo|Video|Acapo):|$)/gs,
        (match, p1, p2) => {
            switch (p1) {
                case 'Titolo':
                    return (
                        '<h1 style="margin-bottom:1em; line-height:1em; font-size: 2em;">' +
                        p2 +
                        '</h1>'
                    )
                case 'Sottotitolo':
                    return (
                        '<h2 style="margin-bottom:1em; margin-top: 1em; font-size: 1.5em;">' +
                        p2 +
                        '</h2>'
                    )
                case 'Paragrafo':
                    return (
                        '<p style="display: inline; font-size: 1em; clear: both; line-height: 1.5em;">' +
                        p2 +
                        '</p>'
                    )
                case 'Immagine':
                    return (
                        '<img style="float:left; max-width: 100%; width: auto; margin:15px; object-fit: cover; object-position: bottom; border-radius: 10px" src="' +
                        p2 +
                        '" alt="illustration"></img>'
                    )
                case 'Link':
                    return (
                        '<a style="font-size:1em; color: #000080;" href="' +
                        p2 +
                        '" target="_black">(link)</a>'
                    )
                case 'Elenco':
                    return (
                        '<ul style="list-style-type: none; font-size: 1em;"><li style="padding-top:1em;">' +
                        p2.split(',').join('</li><li>') +
                        '</li></ul>'
                    )
                case 'Citazione':
                    return (
                        '<blockquote style="font-size: 1em; color: #666;">' +
                        p2 +
                        '</blockquote>'
                    )
                case 'Codice':
                    return `<pre style="margin-top:2em; background-color: #f0f0f0; border: 1px solid #ddd; border-left: 3px solid #000080; color: #666; page-break-inside: avoid; font-family: monospace; font-size: 1em; line-height: 1.6; margin-bottom: 1.6em; max-width: 100%; overflow: auto; padding: 1em 1.5em; display: block; word-wrap: break-word;">
          <code style="background: none; border: 0; font-size: inherit; margin: 0; padding: 0; color: inherit; white-space: pre; word-break: normal;">
            ${p2}
          </code>
        </pre>`
                case 'Grassetto':
                    return '<b style="font-size:1em">' + p2 + '</b>'
                case 'Corsivo':
                    return '<i style="font-size:1em">' + p2 + '</i>'
                case 'Video':
                    return (
                        '<iframe width="100%" height="auto" src="' +
                        p2 +
                        '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    )
                case 'Acapo':
                    return '<br>'
                default:
                    return match // se non corrisponde a nessuno dei casi sopra, restituisce il match originale
            }
        }
    )
})
</script>
