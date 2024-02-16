<template>
  <v-container>

    <v-container class="bg-transparent d-flex flex-column align-center rounded-xl">

      <v-card class="d-flex mb-5" elevation="0" color="transparent" rounded="xl">
        <div class="d-flex align-center">
          <v-avatar color="transparent" size="150" class="mr-3">
            <v-img cover
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2FdavideSabia.webp?alt=media&token=f68f0435-8038-4cd6-b19e-abb2d65e37e1"
              lazy-src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2FdavideSabia.webp?alt=media&token=f68f0435-8038-4cd6-b19e-abb2d65e37e1"
              alt="Davide Sabia"></v-img>
          </v-avatar>
          <div class="text-center">
            <h1 class="text-h3 mb-0">Davide Sabia</h1>
            <h2 class="text-h5">front-end developer</h2>
          </div>
        </div>
      </v-card>

      <div class="d-flex flex-wrap justify-center mb-5">

        <v-icon size="48" color="primary">mdi-code-array</v-icon>
        <v-icon size="48" color="primary">mdi-web</v-icon>
        <v-icon size="48" color="primary">mdi-database</v-icon>
        <v-icon size="48" color="primary">mdi-penguin</v-icon>

      </div>

      <div class="d-flex flex-wrap align-center justify-center ml-3">

        <v-card class="mb-5 mr-3" rounded="xl" elevation="0" variant="outlined">

          <v-card-title class="visible_overflow">Software e progetti</v-card-title>

          <v-card-text>Progetti open source, app web, desktop e tante sperimentazioni.</v-card-text>

          <v-card-actions class="align-left">
            <v-btn class="text-subtitle-2 align-left" append-icon="mdi-arrow-u-right-bottom" size="small" variant="text"
              @click="navigator('progetti')">I miei progetti</v-btn>
          </v-card-actions>

        </v-card>

        <v-card class="mb-5" rounded="xl" elevation="0" variant="outlined">

          <v-card-title>Scrivo, a volte</v-card-title>
          <v-card-text>Scrivo di design,
            sviluppo frontend,
            apprendimento e tanto altro.
          </v-card-text>

          <v-card-actions class="align-left">
            <v-btn class="text-subtitle-2" append-icon="mdi-arrow-u-right-bottom" size="small" variant="text"
              @click="navigator('blog')">I miei articoli</v-btn>
          </v-card-actions>

        </v-card>

      </div>

      <div class="d-flex flex-wrap justify-center mt-5">

        <v-btn class="mx-2" icon small color="primary" variant="text" role="link" target="_blank"
          href="https://it.linkedin.com/in/davidesabia">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>

        <v-btn class="mx-2" icon small color="primary" variant="text" role="link" target="_blank"
          href="https://github.com/Dino-996">
          <v-icon>mdi-github</v-icon>
        </v-btn>

        <v-btn class="mx-2" icon small color="primary" variant="text" role="link" target="_blank"
          href="mailto:davidesabia22@gmail.com?subject=Ciao Davide! Ti contatto dopo aver visitato il tuo sito web&body=Messaggio dello sviluppatore: Cercherò di risponderti quanto prima :)">
          <v-icon>mdi-email</v-icon>
        </v-btn>

      </div>
    </v-container>
  </v-container>

  <carousel-slides
    slide-one="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fhtml-5.png?alt=media&token=a51e10e8-ca2f-47b6-95d8-5a432b57f17c&_gl=1*1l23c5x*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzMzMi42MC4wLjA."
    slide-two="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fcss-3.png?alt=media&token=8619abbd-b465-451b-99f1-90f984580566&_gl=1*cj3o54*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzE5MS42MC4wLjA."
    slide-three="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fjs.png?alt=media&token=b072e53c-955d-4c6a-b9e3-8d07aeedae82&_gl=1*8lup75*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzM4Ny41LjAuMA."
    slide-four="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fnode-js.png?alt=media&token=6d8423a5-7896-45f3-9f81-7b51f63b82cd&_gl=1*x52icd*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzQ2Ny42MC4wLjA."
    slide-five="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fnpm.png?alt=media&token=e38f5853-12a8-4997-9d6a-103fc3ca0ce8&_gl=1*7krz8i*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzUwMy4yNC4wLjA."
    slide-six="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Ftypescript.png?alt=media&token=93bf3ae9-e026-4464-b54a-d81fbad55a35&_gl=1*e9v2ml*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzUzNC42MC4wLjA."
    slide-seven="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fvisual-studio.png?alt=media&token=a51d4147-f0e1-4c6e-bfe3-9e089a2de8f6&_gl=1*1avogbm*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzU5MS4zLjAuMA.."
    slide-eight="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fjava.png?alt=media&token=6e28dfc1-f257-41ad-93c4-7ae3f8c7dd7b&_gl=1*1yosu4*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzYxNi4zOC4wLjA." />

  <v-container>
    <v-container class="bg-primary text-secondary rounded-xl">
      <v-card class="text-h2 mb-2 bg-transparent text-secondary" elevation="0" color="transparent">
        <v-card-title>
          <span class="text-h2">Negli anni,</span>
        </v-card-title>
        <v-card-text class="text-subtitle-1">
          ho creato prodotti per imprese della mia città, dai siti Web di
          marketing a soluzioni complesse e app
          aziendali con particolare attenzione a esperienze utente veloci, eleganti e accessibili.
        </v-card-text>
      </v-card>
      <Contatti />
    </v-container>
  </v-container>

</template>

<script lang="ts" setup>
import CarouselSlides from '@/components/CarouselSlides.vue';
import Contatti from '@/components/Contatti.vue';
import navigator from '@/utils/navigator';
</script>
