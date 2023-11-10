<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn variant="text" class="mx-4" v-for="social in socials" :key="social.id" rounded="xl" :icon="social.img"
        role="link" target="_blank" :href="social.link"></v-btn>
    </div>

    <v-divider></v-divider>

    <div class="pt-0 d-flex flex-wrap align-start justify-center">

      <v-list density="compact">
        <v-list-subheader>Men&ugrave;</v-list-subheader>
        <v-list-item v-for="page in pages" :key="page.id" :value="page" :active="false" rounded="xl"
          @click="navigator(page.router)">
          <template v-slot:prepend>
            <v-icon :icon="page.icon"></v-icon>
          </template>
          <v-list-item-title>{{ page.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list lines="one" class="ml-5" density="compact">
        <v-list-subheader>Informativa Privacy</v-list-subheader>
        <div v-for="policy in policies" :key="policy.id" :value="policy" rounded="xl" :active="false">

          <dialog-component :title="policy.title" :icon="policy.icon" :link="policy.link"></dialog-component>
        </div>
      </v-list>

    </div>



    <v-divider></v-divider>

    <div class="d-flex flex-column justify-start">
      <div>
        &copy; {{ new Date().getFullYear() }} — made with
        <v-btn variant="text" icon="$vuetify" class="ma-0 pa-2" role="link" href="https://vuetifyjs.com/en/"
          target="_blank"></v-btn>
      </div>
      <div>
        Developed by
        <strong>
          <a href="https://github.com/Dino-996" target="_blank"> Dino-996</a>
        </strong>
      </div>
    </div>
  </v-footer>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import navigator from "@/utils/navigator";
import DialogComponent from "@/components/DialogComponent.vue";


const socials = reactive([
  {
    id: 0,
    img: "mdi-linkedin",
    link: "https://it.linkedin.com/in/davidesabia",
  },
  { id: 1, img: "mdi-github", link: "https://github.com/Dino-996" },
  {
    id: 2,
    img: "mdi-google",
    link: "mailto:davidesabia22@gmail.com?subject=Ciao Davide! Ti contatto dopo aver visitato il tuo sito web&body=Messaggio dello sviluppatore: Cercherò di risponderti quanto prima :)",
  },
]);

const pages = reactive([
  { id: 0, title: "Home", icon: "mdi-home", router: "/" },
  { id: 1, title: "Chi sono", icon: "mdi-account", router: "/chiSono" },
  {
    id: 2,
    title: "Progetti",
    icon: "mdi-arrow-projectile",
    router: "/progetti",
  },
  { id: 3, title: "Blog", icon: "mdi-post", router: "/blog" },
  {
    id: 4,
    title: "Contatti",
    icon: "mdi-book-open-blank-variant",
    router: "/contatti",
  },
]);

const policies = reactive([
  { id: 0, title: "Privacy Policy", icon: "mdi-scale-balance", link: "https://www.iubenda.com/privacy-policy/83244684", component: () => import("@/components/DialogComponent.vue"), },
  { id: 1, title: "Cookie Policy", icon: "mdi-cookie", link: "https://www.iubenda.com/privacy-policy/83244684/cookie-policy" },
]);
</script>

