<template>
    <v-container>
        <div class="mb-3">
            <v-icon class="mr-3">mdi-comment</v-icon>
            {{ comments_list.length }}
            {{
                comments_list.length === 1
                    ? singular
                    : singular.replace('commento', 'commenti')
            }}
        </div>

        <v-list bg-color="transparent" rounded="lg" class="mb-5">
            <v-card
                max-height="300"
                class="overflow-y-auto"
                elevation="0"
                color="transparent"
            >
                <v-list-item
                    class="mb-5"
                    v-for="(comment, index) in comments_list"
                    :key="index"
                >
                    <v-divider class="mb-5"></v-divider>
                    <v-card elevation="0" color="transparent">
                        <template v-slot:title
                            ><span class="text-subtitle-1">{{
                                comment.name
                            }}</span></template
                        >
                        <template v-slot:subtitle
                            ><span class="text-subtitle-2">{{
                                tempoTrascorsoDescrittivo(comment.date)
                            }}</span></template
                        >
                        <template v-slot:text
                            ><span class="text-subtitle-2">{{
                                comment.text
                            }}</span></template
                        >
                        <template v-slot:prepend>
                            <v-avatar class="mr-3" :image="comment.src">
                            </v-avatar>
                        </template>
                    </v-card>
                </v-list-item>
            </v-card>
        </v-list>

        <v-form fast-fail @submit.prevent="addComment">
            <div class="d-flex align-center mb-5">
                <v-icon class="mr-3">mdi-rename-box</v-icon>
                Commenta
            </div>

            <v-expansion-panels class="mb-5 mt-5">
                <v-expansion-panel
                    color="primary"
                    :title="faqs ? 'Linee guida' : 'Grazie per la comprensione'"
                    expand-icon="mdi-plus"
                    collapse-icon="mdi-minus"
                    @click="faqs = !faqs"
                >
                    <v-expansion-panel-text>
                        Ti invito a partecipare alla discussione in questo
                        spazio per i commenti rispettando alcune regole:

                        <div class="mt-5 mb-5 ml-5 mr-5">
                            <ol>
                                <li>
                                    Mantieni un tono tranquillo e rispettoso.
                                </li>
                                <li>
                                    Evita di utilizzare un linguaggio volgare o
                                    offensivo.
                                </li>
                                <li>
                                    Rispetta le opinioni altrui, anche se non
                                    sei d'accordo.
                                </li>
                                <li>
                                    Non divulgare informazioni personali,
                                    n&eacute; tue n&eacute; di altri.
                                </li>
                                <li>
                                    Non pubblicare spam o contenuti
                                    promozionali.
                                </li>
                            </ol>
                        </div>

                        I commenti che non rispettano queste regole saranno
                        rimossi.
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

            <div class="d-flex align-center justify-space-between">
                <v-menu location="bottom" width="150" class="text-center">
                    <template v-slot:activator="{ props }">
                        <v-btn
                            icon="mdi-alien-outline"
                            color="primary"
                            class="mr-3"
                            dark
                            v-bind="props"
                        >
                        </v-btn>
                    </template>

                    <v-list class="text-h6 overflow-y-10">
                        Avatar
                        <v-divider inset></v-divider>
                        <v-list-item
                            class="text-end"
                            v-for="avatar in avatars"
                            :key="avatar.id"
                            :value="avatar.id"
                            @click="selectAvatar(avatar.image)"
                        >
                            <v-avatar :image="avatar.image" class="mt-3 mb-3">
                            </v-avatar>
                            <v-divider inset></v-divider>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-text-field
                    :rules="[rules.name || rules.nameEmpty]"
                    counter="15"
                    v-model="newName"
                    label="Nome"
                    hint="Inserisci il tuo nickname se preferisci"
                    variant="underlined"
                    class="mb-3"
                    clearable
                    required
                ></v-text-field>
            </div>

            <v-textarea
                :rules="[rules.text || rules.textEmpty]"
                counter="150"
                v-model="newComment"
                label="Commento"
                prepend-icon="mdi-text-box-edit"
                variant="underlined"
                clearable
                required
            ></v-textarea>

            <div class="align-left mt-3">
                <v-btn
                    :prepend-icon="textButton.icon"
                    type="submit"
                    :color="textButton.color"
                    >{{ textButton.name }}</v-btn
                >
            </div>
        </v-form>
    </v-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
import Comments from '@/interface/Comments'
import firestore from '@/plugins/firebase'

const avatars = reactive([
    {
        id: 0,
        name: 'gamer-man',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Favatars%2Fgamer-man.png?alt=media&token=5b596416-cab4-4398-b943-6e6d4413a918',
    },
    {
        id: 1,
        name: 'gamer-woman',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Favatars%2Fgamer-woman.png?alt=media&token=46518488-d368-441b-9acb-9bbfe0e674eb',
    },
    {
        id: 2,
        name: 'man',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Favatars%2Fman.png?alt=media&token=cc3bce01-e28e-45ab-9fa7-09eef0e76f7c',
    },
    {
        id: 3,
        name: 'woman',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Favatars%2Fwoman.png?alt=media&token=9b5b02e2-a534-47ab-9c5a-a2ee5706550a',
    },
    {
        id: 4,
        name: 'robot-man',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Favatars%2Frobot-man.png?alt=media&token=429fa35c-61da-489f-b997-f36e46ff01b1',
    },
    {
        id: 5,
        name: 'robot-woman',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Favatars%2Frobot-woman.png?alt=media&token=97bbc677-b7a0-47cc-99ee-386841da28e2',
    },
])

const comments_list: Array<Comments> = reactive([])
const route: RouteLocationNormalizedLoaded = useRoute()
const singular = ref<string>('commento')
const newName = ref<string>('')
const newComment = ref<string>('')
let newDate = Date.now()
const faqs = ref<boolean>(true)
const selectedAvatar = ref<string>(
    'https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Favatars%2Fgamer-man.png?alt=media&token=5b596416-cab4-4398-b943-6e6d4413a918'
)
const textButton = reactive({
    name: 'Invia',
    color: 'primary',
    icon: 'mdi-comment-arrow-right',
})

const selectAvatar = (avatar: string) => {
    selectedAvatar.value = avatar
}

const rules = {
    name: (value: string) =>
        value.length <= 15 || 'Inserisci un nome con meno di 15 caratteri',
    nameEmpty: (value: string) => !!value || 'Inserisci un nome valido',
    text: (value: string) =>
        value.length <= 150 ||
        'Inserisci un commento con meno di 250 caratteri',
    textEmpty: (value: string) => !!value || 'Inserisci un commento valido',
}

async function getComments(): Promise<void> {
    const comments = await getDocs(collection(firestore, 'comments'))
    comments.forEach((data) => {
        if (data.exists()) {
            const comment = data.data() as Comments
            const comment_object = {
                id: comment.id,
                name: comment.name,
                text: comment.text,
                date: comment.date,
                src: comment.src,
            }
            if (comment_object.id === parseInt(route.params.id.toString())) {
                console.log(
                    comment_object.id,
                    ' - ',
                    parseInt(route.params.id.toString())
                )
                comments_list.push(comment_object)
            }
        }
    })
}

getComments()

function tempoTrascorsoDescrittivo(timestampCommento: number) {
    const millisecondiTrascorsi = Date.now() - timestampCommento
    const secondo = 1000
    const minuto = secondo * 60
    const ora = minuto * 60
    const giorno = ora * 24
    const settimana = giorno * 7
    const mese = giorno * 30
    const anno = giorno * 365
    if (millisecondiTrascorsi < minuto) {
        return millisecondiTrascorsi < secondo * 2
            ? 'Poco fa'
            : Math.floor(millisecondiTrascorsi / secondo) + ' secondi fa'
    } else if (millisecondiTrascorsi < ora) {
        const minuti = Math.floor(millisecondiTrascorsi / minuto)
        return minuti === 1 ? '1 minuto fa' : minuti + ' minuti fa'
    } else if (millisecondiTrascorsi < giorno) {
        const ore = Math.floor(millisecondiTrascorsi / ora)
        return ore === 1 ? '1 ora fa' : ore + ' ore fa'
    } else if (millisecondiTrascorsi < settimana) {
        const giorni = Math.floor(millisecondiTrascorsi / giorno)
        return giorni === 1 ? '1 giorno fa' : giorni + ' giorni fa'
    } else if (millisecondiTrascorsi < mese) {
        const settimane = Math.floor(millisecondiTrascorsi / settimana)
        return settimane === 1 ? '1 settimana fa' : settimane + ' settimane fa'
    } else if (millisecondiTrascorsi < anno) {
        const mesi = Math.floor(millisecondiTrascorsi / mese)
        return mesi === 1 ? '1 mese fa' : mesi + ' mesi fa'
    } else {
        const anni = Math.floor(millisecondiTrascorsi / anno)
        return anni === 1 ? '1 anno fa' : anni + ' anni fa'
    }
}

async function addComment() {
    if (
        rules.name(newName.value) !== true ||
        rules.nameEmpty(newName.value) !== true ||
        rules.text(newComment.value) !== true ||
        rules.textEmpty(newComment.value) !== true
    ) {
        textButton.name = 'Riempi i campi, riprova...'
        textButton.color = '#F44336'
        textButton.icon = 'mdi-comment-alert'
    } else {
        comments_list.push({
            id: parseInt(route.params.id.toString()),
            name: newName.value,
            date: newDate,
            text: newComment.value,
            src: selectedAvatar.value,
        })
        await addDoc(collection(firestore, 'comments'), {
            id: parseInt(route.params.id.toString()),
            name: newName.value,
            date: newDate,
            text: newComment.value,
            src: selectedAvatar.value,
        })
        textButton.name = 'Invia'
        textButton.color = 'primary'
        textButton.icon = 'mdi-comment-arrow-right'
        newName.value = ''
        newComment.value = ''
    }
}
</script>
