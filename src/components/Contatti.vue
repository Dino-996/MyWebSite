<template>
  <v-container style="max-width: 850px" class="mw-400">
    <v-card variant="text" class="pt-3 pl-3 pr-3" density="compact" elevation="0"
      rounded="xl" :class="theme.global.name.value === 'dark' ? 'bg-grey-darken-4' : 'bg-white'">
      <v-card-title class="visible_overflow">
        Mandami un messaggio!
      </v-card-title>
      <v-card-text>
        Hai una domanda, una proposta o vuoi semplicemente parlare? Compila i campi sottostanti.
      </v-card-text>
      <v-card-item>
        <v-form @submit.prevent role="form" class="mr-3 ml-3">
          <v-text-field type="text" prependIcon="mdi-account" variant="underlined" label="Nome" v-model="name"
            :rules="nameRules" counter="15" required aria-label="Inserisci il tuo nome"></v-text-field>
          <v-text-field type="email" prependIcon="mdi-email" variant="underlined" label="Email" v-model="email"
            :rules="emailRules" required aria-label="inserisci la tua email"></v-text-field>
          <v-textarea type="textarea" prependIcon="mdi-message" label="Messaggio" variant="underlined" counter="225"
            rows="2" row-height="15" auto-grow v-model="textBox" :rules="textBoxRules" required clearable
            aria-label="Inserisci un messaggio"></v-textarea>

          <v-container fluid>
            <v-checkbox v-model="checkbox" :rules="checkboxRules" color="gray" required aria-required="true">
              <template v-slot:label>
                <div>
                  Ho letto la
                  <v-tooltip location="top" max-width="500">
                    <template v-slot:activator="{ props }">
                      <a href="https://www.iubenda.com/privacy-policy/83244684" target="_blank" class="text-blue"
                        v-bind="props" @click.stop> Privacy Policy </a>
                    </template>
                    Leggi l'informativa privacy policy
                  </v-tooltip>
                </div>
              </template>
            </v-checkbox>
            <v-alert v-if="checkbox === true" :text="checktext" type="info" color="info" rounded="xl"></v-alert>
          </v-container>

          <v-container v-if="success">
            Grazie per avermi contattato, ti risponderò prima
            possibile.
            <v-progress-linear indeterminate></v-progress-linear>
          </v-container>
          <div class="d-flex align-center align-left">
            <v-btn class="mt-2 mr-3" variant="text" size="small" @click="reset" role="button"
              aria-controls="Reset form">Reset</v-btn>
            <span>
              <v-btn icon="mdi-arrow-u-right-bottom" type="submit" class="mt-2" variant="text" @click="sendEmail"
                role="button" aria-controls="Invia"></v-btn>
            </span>
          </div>
        </v-form>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
import emailjs from '@emailjs/browser';
import router from '@/router';
import appCheck from '@/plugins/firebase';

const name: Ref<string> = ref('');
const email: Ref<string> = ref('');
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const checkbox: Ref<boolean> = ref(false);
const textBox: Ref<string> = ref('');
const success: Ref<boolean> = ref(false);
const theme = useTheme();
const checktext: string = "Spuntando la casella acconsenti al trattamento dei dati personali";

const nameRules = [
  () => !!name.value || 'Inserisci un nome',
  () => (name && name.value.length >= 3) || 'Inserisci minimo 3 caratteri',
  () =>
    (name && name.value.length < 15) ||
    'Puoi inserire al massimo 15 caratteri',
]

const emailRules = [
  () => !!email.value || 'Inserisci una email',
  () => emailRegex.test(email.value) || 'Email non valida',
]

const checkboxRules = [
  () => !!checkbox.value || 'Campo obligatorio',
];

const textBoxRules = [
  () => !!textBox.value || 'Inserisci un messaggio',
  () =>
    (textBox && textBox.value.length < 225) ||
    'Puoi inserire al massimo 225 caratteri',
]

onMounted(() => {
  appCheck
});

function reset() {
  name.value = ''
  email.value = ''
  textBox.value = ''
  checkbox.value = false
}

function sendEmail() {
  var templateParams = {
    from_name: ref(name).value,
    from_email: ref(email).value,
    message: ref(textBox).value,
  }
  if (
    name.value != null &&
    name.value != '' &&
    name.value.length > 3 &&
    emailRegex.test(email.value) === true &&
    email.value != '' &&
    textBox.value.length < 255 &&
    textBox.value != '' &&
    checkbox.value === true
  ) {
    success.value = true
    emailjs
      .send(
        'Davide_sabia',
        'portfolio',
        templateParams,
        '4xpN4tgGZRi6NzkiE'
      )
      .then(
        function (response) {
          console.log(
            'Il messaggio è stato inviato correttamente ->',
            response.status,
            response.text
          )
          setTimeout(() => {
            window.location.reload();
          }, 3000)
        },
        function (error) {
          console.log('Errore imprevisto -> ', error)
          router.push('/404')
        }
      )
  }
}
</script>
