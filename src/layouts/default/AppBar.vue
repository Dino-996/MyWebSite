<template>
  <v-app-bar scroll-behavior="hide">

    <template v-slot:prepend>
      <v-btn variant="text" @click="toggleTheme()" @click.stop="switcher = !switcher"
        :icon="switchIcon(switcher, moon, sun)" class="mr-3" />
    </template>

    <v-divider inset vertical />

    <template v-slot:append>
      <v-app-bar-nav-icon variant="text" :icon="switchIcon(drawer, menu_open, menu_closed)"
        @click.stop="drawer = !drawer" />
    </template>

    <v-app-bar-title>
      <v-avatar size="33" class="mr-1">
        <v-img src="/src/assets/io.png" alt="avatar"></v-img>
      </v-avatar>
      Davide
      Sabia
    </v-app-bar-title>

    <v-spacer></v-spacer>

  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" width="150" temporary>
    <v-container>
      <v-list>
        <v-btn :prepend-icon="'mdi-home'" variant="text" v-on:click="navigator('/')">Home</v-btn>
      </v-list>
      <v-list>
        <v-btn prepend-icon="mdi-account" variant="text" v-on:click="navigator('/chisono')">Chi sono</v-btn>
      </v-list>
      <v-list>
        <v-btn prepend-icon="mdi-arrow-projectile" variant="text" v-on:click="navigator('/progetti')">Progetti</v-btn>
      </v-list>
      <v-list>
        <v-btn prepend-icon="mdi-blog" variant="text" v-on:click="navigator('/blog')">Blog</v-btn>
      </v-list>
      <v-list>
        <v-btn prepend-icon="mdi-book-open-blank-variant" variant="text"
          v-on:click="navigator('/contatti')">Contatti</v-btn>
      </v-list>
      <v-divider />
      <br>
      <v-btn v-on:click="download()">Scarica CV</v-btn>
    </v-container>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { useTheme } from 'vuetify'
import download from '@/utils/download';
import navigator from '@/utils/navigator';

const switcher: Ref<boolean> = ref(false);
const drawer: Ref<boolean> = ref(false);
const menu_open: string = 'mdi-menu-open';
const menu_closed: string = 'mdi-menu';
const sun: string = 'mdi-weather-sunny';
const moon: string = 'mdi-weather-night';

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function switchIcon(value: boolean, icon_1: string, icon_2: string): string {
  if (value === true) {
    return icon_1;
  }
  return icon_2;
}
</script>
