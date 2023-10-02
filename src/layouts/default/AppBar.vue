<template>
  <v-app-bar>

    <template v-slot:prepend>
      <v-btn variant="text" @click="toggleTheme()" @click.stop="switcher = !switcher"
        :icon="switchIcon(switcher, moon, sun)" class="mr-3" />
    </template>

    <v-divider inset vertical />

    <template v-slot:append>
      <v-app-bar-nav-icon id="d-smart" variant="text" :icon="switchIcon(drawer, menu_open, menu_closed)"
        @click.stop="drawer = !drawer" />
    </template>

    <v-app-bar-title class="title">
      <v-avatar @click="onTop" size="33" class="mr-1">
        <v-img src="/src/assets/io.png" alt="avatar"></v-img>
      </v-avatar>
      Davide
      Sabia
    </v-app-bar-title>
    <div class="d-flex flex-row align-center" id="d-desk">
        <div class="ml-3">
          <v-btn rounded="lg" :prepend-icon="'mdi-home'" variant="text" v-on:click="onTop()"
            @click="navigator('/')">Home</v-btn>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <v-btn rounded="lg" prepend-icon="mdi-account" variant="text" v-on:click="onTop()"
            @click="navigator('/chisono')">Chi sono</v-btn>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <v-btn rounded="lg" prepend-icon="mdi-arrow-projectile" variant="text" v-on:click="onTop()"
            @click="navigator('/progetti')">Progetti</v-btn>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <v-btn rounded="lg" prepend-icon="mdi-post" variant="text" v-on:click="onTop()"
            @click="navigator('/blog')">Blog</v-btn>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <v-btn rounded="lg" prepend-icon="mdi-book-open-blank-variant" variant="text" v-on:click="onTop()"
            @click="navigator('/contatti')">Contatti</v-btn>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <v-btn rounded="lg" v-on:click="download()">Scarica CV</v-btn>
        </div>
      </div>
    <v-spacer></v-spacer>

  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" width="150" temporary id="d-smart">
    <v-container>
      <v-list>
        <v-btn :prepend-icon="'mdi-home'" variant="text" v-on:click="onTop()" @click="navigator('/')">Home</v-btn>
      </v-list>
      <v-list>
        <v-btn prepend-icon="mdi-account" variant="text" v-on:click="onTop()" @click="navigator('/chisono')">Chi
          sono</v-btn>
      </v-list>
      <v-list>
        <v-btn prepend-icon="mdi-arrow-projectile" variant="text" v-on:click="onTop()"
          @click="navigator('/progetti')">Progetti</v-btn>
      </v-list>
      <v-list>
        <v-btn prepend-icon="mdi-post" variant="text" v-on:click="onTop()" @click="navigator('/blog')">Blog</v-btn>
      </v-list>
      <v-list>
        <v-btn prepend-icon="mdi-book-open-blank-variant" variant="text" v-on:click="onTop()"
          @click="navigator('/contatti')">Contatti</v-btn>
      </v-list>
      <v-divider />
      <br>
      <v-btn v-on:click="download()">Scarica CV</v-btn>
    </v-container>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { Ref, ref, reactive } from 'vue';
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

function onTop(): void {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

</script>
