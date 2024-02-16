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
      <v-card max-height="300" class="overflow-y-auto" elevation="0" color="transparent">
        <v-list-item class="mb-5" v-for="(comment, index) in comments_list" :key="index">
          <v-divider class="mb-5"></v-divider>
          <v-card elevation="0" color="transparent">
            <template v-slot:title><span class="text-subtitle-1">{{
              comment.name
            }}</span></template>
            <template v-slot:subtitle><span class="text-subtitle-2">{{
              tempoTrascorsoDescrittivo(comment.date)
            }}</span></template>
            <template v-slot:text><span class="text-subtitle-2">{{
              comment.text
            }}</span></template>
            <div v-if="auth.emailVerified && (auth.uid.value === comment.uid)">
              <div v-if="isComment(comment.commentId)">
                <v-textarea v-model="commentMod" :placeholder="comment.text" class="mt-3"
                  :rules="[rulesMod.text || rulesMod.textEmpty]" counter="150" label="Modifica il commento"
                  prepend-icon="mdi-text-box-edit" variant="underlined" color="grey" clearable required></v-textarea>
                <div class="align-left mt-1">
                  <v-btn :disabled="disabledButtonMod()" prepend-icon="mdi-comment-arrow-right" class="text-subtitle-1"
                    variant="text" size="small" @click="modComment(comment.commentId)"
                    @click.once="dialog = false">Invia</v-btn>
                </div>
              </div>
            </div>
            <template v-slot:prepend>
              <v-avatar class="mr-3" :image="comment.src!">
              </v-avatar>
            </template>
          </v-card>
        </v-list-item>
      </v-card>
    </v-list>

    <v-form fast-fail @submit.prevent="addComment">

      <v-expansion-panels class="mb-5 mt-5">
        <v-expansion-panel color="primary" :title="faqs ? 'Linee guida' : 'Grazie per la comprensione'"
          expand-icon="mdi-plus" collapse-icon="mdi-minus" @click="faqs = !faqs">
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

      <v-textarea class="mt-3" :rules="[rules.text || rules.textEmpty]" counter="150" v-model="newComment"
        label="Commento" prepend-icon="mdi-text-box-edit" variant="underlined" color="grey" clearable required
        :disabled="auth.emailVerified.value != true"></v-textarea>

      <div class="d-flex align-center justify-space-between mt-3">
        <div v-if="auth.emailVerified.value">
          <v-chip prepend-icon="mdi-shield-check" rounded="xl" color="green">
            Accesso effettuato
          </v-chip>
          <v-spacer></v-spacer>
          <v-btn size="small" variant="text" class="mt-2 text-subtitle-1" prepend-icon="mdi-logout"
            @click="auth.signOutUser">Logout</v-btn>
        </div>
        <div v-else>
          <v-btn size="small" variant="text" class="text-subtitle-1" prepend-icon="mdi-google"
            @click="auth.googleAuth">Accedi con Google</v-btn>
        </div>
        <v-btn :disabled="auth.emailVerified.value != true" variant="text" :prepend-icon="textButton.icon" type="submit"
          :color="textButton.color">
          {{ textButton.name }}
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { getDocs, collection, addDoc, query, where, getDoc, and, doc, updateDoc } from 'firebase/firestore';
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import Comments from '@/interface/Comments';
import AuthVue from './AuthVue.vue';
import auth from '@/utils/auth';
import firestore from '@/plugins/firebase';

const dialog = ref<boolean>(false);
const comments_list: Array<Comments> = reactive([]);
const route: RouteLocationNormalizedLoaded = useRoute();
const singular = ref<string>('commento');
const newCommentId = ref<number>(0);
const newComment = ref<string>('');
const commentMod = ref<string>('');
let newDate = Date.now();
const faqs = ref<boolean>(true);

const textButton = reactive({
  name: 'Invia',
  color: 'primary',
  icon: 'mdi-comment-arrow-right',
});

const rules = {
  text: (value: string) =>
    value.length <= 150 ||
    'Inserisci un commento con meno di 250 caratteri',
  textEmpty: (value: string) => !!value || 'Inserisci un commento valido',
}

const rulesMod = {
  text: (value: string) =>
    value.length <= 150 ||
    'Inserisci un commento con meno di 250 caratteri',
  textEmpty: (value: string) => !!value || 'Inserisci un commento valido',
}

const disabledButtonMod = () => {
  if (rulesMod.text(commentMod.value) !== true || rulesMod.textEmpty(commentMod.value) !== true) {
    return true;
  }
  return false;
}

async function getComments(): Promise<void> {
  const comments = await getDocs(collection(firestore, 'comments'))
  comments.forEach((data) => {
    if (data.exists()) {
      const comment = data.data() as Comments
      const comment_object = {
        id: comment.id,
        uid: comment.uid,
        commentId: comment.commentId,
        name: comment.name,
        text: comment.text,
        date: comment.date,
        src: comment.src,
      }
      if (comment_object.id === parseInt(route.params.id.toString())) {
        comments_list.push(comment_object);
      }
    }
  })
}

getComments();

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
    rules.text(newComment.value) !== true ||
    rules.textEmpty(newComment.value) !== true
  ) {
    textButton.name = 'Scrivi un commento valido, riprova...'
    textButton.color = '#F44336'
    textButton.icon = 'mdi-comment-alert'
  } else {
    comments_list.push({
      id: parseInt(route.params.id.toString()),
      uid: auth.uid.value,
      commentId: newCommentId.value,
      name: auth.displayName.value,
      date: newDate,
      text: newComment.value,
      src: auth.photoURL.value
    })
    await addDoc(collection(firestore, 'comments'), {
      id: parseInt(route.params.id.toString()),
      uid: auth.uid.value,
      commentId: newCommentId.value,
      name: auth.displayName.value,
      date: newDate,
      text: newComment.value,
      src: auth.photoURL.value
    })
    textButton.name = 'Invia'
    textButton.color = 'primary'
    textButton.icon = 'mdi-comment-arrow-right'
    newComment.value = ''
    newCommentId.value++
  }
}

function isComment(commentId: number): boolean {
  comments_list.forEach(comment => {
    if (comment.commentId !== commentId) {
      return false;
    }
  });
  return true;
}

async function modComment(commentId: number) {
  const q = query(collection(firestore, "comments"), where("uid", "==", auth.uid.value), where("id", "==", parseInt(route.params.id.toString())));
  const userComments = await getDocs(q);
  comments_list.forEach(comment => {
    if (comment.commentId === commentId) {
      comment.text = commentMod.value;
      console.log("Id: ", commentId, "Testo: ", comment.text);
    }
  });
  userComments.forEach(async (comment) => {
    if (comment.data().commentId === commentId) {
      console.log("match", commentId);
      const commentRef = doc(firestore, 'comments', comment.id);
      await updateDoc(commentRef, {
        text: commentMod.value,
      });
      commentMod.value = '';
    }
  });
}

</script>
