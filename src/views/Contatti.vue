<template>
  <div class="d-flex flex-wrap align-start justify-space-evenly">
    <v-container style="max-width: 850px">
      <h1 class="text-h2 mb-3">Contatti</h1>
      <v-card class="mx-auto pa-2">
        <v-list>
          <v-list-subheader>I miei riferimenti</v-list-subheader>
          <v-list-item
            v-for="contact in contacts"
            :key="contact.id"
            rounded="xl"
          >
            <template v-slot:title>
              {{ contact.title }}
            </template>
            <template v-slot:subtitle>
              <a
                target="_blank"
                :href="contact.reference"
                aria-label="I miei riferimenti"
                >{{ contact.subtitle }}</a
              >
            </template>
            <template v-slot:prepend>
              <v-icon :icon="contact.img" :color="contact.color"></v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
      <v-container>
        <cite>
          <p class="text-h4">
            "L'unico modo per andare veloce è andare piano."
          </p>
        </cite>
        <p>
          - Robert C. Martin aka Uncle Bob (Sull'importanza della scrittura di
          codice pulito)
        </p>
      </v-container>
    </v-container>
    <v-container style="max-width: 850px" class="mb-3">
      <v-card
        title="Puoi contattarmi compilando il form"
        variant="text"
        class="pt-3 pl-3 pr-3 pb-3"
        density="compact"
        elevation="3"
      >
        <v-card-item>
          <v-form @submit.prevent role="form">
            <v-text-field
              type="text"
              prependIcon="mdi-account"
              variant="underlined"
              label="Nome"
              v-model="name"
              :rules="nameRules"
              counter="15"
              required
              aria-label="Inserisci il tuo nome"
            ></v-text-field>
            <v-text-field
              type="email"
              prependIcon="mdi-email"
              variant="underlined"
              label="Email"
              v-model="email"
              :rules="emailRules"
              required
              aria-label="inserisci la tua email"
            ></v-text-field>
            <v-textarea
              type="textarea"
              prependIcon="mdi-message"
              label="Messaggio"
              variant="underlined"
              counter="225"
              rows="2"
              row-height="15"
              auto-grow
              v-model="textBox"
              :rules="textBoxRules"
              required
              clearable
              aria-label="Inserisci un messaggio"
            ></v-textarea>
            <v-container fluid>
              <v-checkbox
                type="checkbox"
                :rules="checkboxRules"
                v-model="checkbox"
                color="gray"
                required
                aria-required="true"
              >
                <template v-slot:label>
                  <div>
                    Acconsento al trattamento dei dati come specificato
                    nell'informativa
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <a
                          color="yellow"
                          target="_blank"
                          href="https://www.iubenda.com/privacy-policy/83244684"
                          v-bind="props"
                          @click.stop
                          >Privacy Policy</a
                        >
                      </template>
                      Leggi l'informativa Privacy Policy
                    </v-tooltip>
                  </div>
                </template>
              </v-checkbox>
            </v-container>
            <v-container v-if="success">
              Grazie per avermi contattato, ti risponderò prima possibile.
              <v-progress-linear indeterminate></v-progress-linear>
            </v-container>
            <div class="align-left">
              <v-btn
                class="mt-2 mr-3"
                variant="text"
                @click="reset"
                role="button"
                aria-controls="Reset form"
                >Resetta form</v-btn
              >
              <span>
                <v-btn
                  type="submit"
                  class="mt-2"
                  variant="text"
                  @click="sendEmail"
                  role="button"
                  aria-controls="Invia"
                  >Invia</v-btn
                >
              </span>
            </div>
          </v-form>
        </v-card-item>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, reactive } from "vue";
import emailjs from "@emailjs/browser";
import router from "@/router";
import appCheck from "@/plugins/firebase";
import { onMounted } from "vue";

onMounted(() => {
  appCheck;
});

let name: Ref<string> = ref("");
let email: Ref<string> = ref("");
let emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let checkbox: Ref<boolean> = ref(false);
let textBox: Ref<string> = ref("");
let success: Ref<boolean> = ref(false);

const contacts = reactive([
  {
    id: 0,
    title: "Gmail",
    subtitle: "davidesabia22@gmail.com",
    color: "red",
    img: "mdi-google",
    reference:
      "mailto:davidesabia22@gmail.com?subject=Ciao Davide! Ti contatto dopo aver visitato il tuo sito web&body=Messaggio dello sviluppatore: Cercherò di risponderti quanto prima :)",
  },
  {
    id: 1,
    title: "Github",
    subtitle: "Dino-996",
    color: "black",
    img: "mdi-github",
    reference: "https://github.com/Dino-996",
  },
  {
    id: 2,
    title: "LinkedIn",
    subtitle: "davidesabia",
    color: "blue",
    img: "mdi-linkedin",
    reference: "https://it.linkedin.com/in/davidesabia",
  },
]);

const nameRules = [
  () => !!name.value || "Inserisci un nome",
  () => (name && name.value.length >= 3) || "Inserisci minimo 3 caratteri",
  () => (name && name.value.length < 15) || "Puoi inserire massimo 15 caratteri",
];

const emailRules = [
  () => !!email.value || "Inserisci una email",
  () => emailRegex.test(email.value) || "Email non valida",
];

const checkboxRules = [() => !!checkbox.value || "Campo obligatorio"];

const textBoxRules = [
  () => !!textBox.value || "Inserisci un messaggio",
  () =>
    (textBox && textBox.value.length < 225) ||
    "Puoi inserire massimo 225 caratteri",
];

function reset() {
  name.value = "";
  email.value = "";
  textBox.value = "";
  checkbox.value = false;
}

function sendEmail() {
  var templateParams = {
    from_name: ref(name).value,
    from_email: ref(email).value,
    message: ref(textBox).value,
  };
  if (
    name.value != null &&
    name.value != "" &&
    name.value.length > 3 &&
    emailRegex.test(email.value) === true &&
    email.value != "" &&
    textBox.value.length < 255 &&
    textBox.value != "" &&
    checkbox.value === true
  ) {
    success.value = true;
    emailjs
      .send("Davide_sabia", "portfolio", templateParams, "4xpN4tgGZRi6NzkiE")
      .then(
        function (response) {
          console.log(
            "Il messaggio è stato inviato correttamente ->",
            response.status,
            response.text,
          );
          setTimeout(() => {
            router.push("/");
          }, 3000);
        },
        function (error) {
          console.log("Errore imprevisto -> ", error);
          router.push("/404");
        },
      );
  }
}
</script>
