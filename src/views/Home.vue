<template>
  <v-container>

    <div class="d-flex justify-start align-center">
      <div>
        <h1 class="text-h1 slide-in-rigth-to-left">Ehil&agrave;</h1>
      </div>
      <div class="slide-in-left-to-rigth">
        <v-img src="/src/assets/home/waving.png" lazy-src="/src/assets/home/waving.png" height="150" width="100" id="block-penguin"/>
      </div>
    </div>

    <br>

    <type-writer text="Benvenuto!" number="10" />
  </v-container>

  <carousel-slides slide-one="/src/assets/carousel/js.png" slide-two="/src/assets/carousel/css-3.png"
    slide-three="/src/assets/carousel/html-5.png" slide-four="/src/assets/carousel/java.png"
    slide-five="/src/assets/carousel/node-js.png" slide-six="/src/assets/carousel/npm.png"
    slide-seven="/src/assets/carousel/typescript.png" slide-eight="/src/assets/carousel/visual-studio.png" />

    <div class="slide-in-rigth-to-left mt-3">
    <text-design title="La passione per lo sviluppo software ci accomuna?"
      text="Ti invito a fare un salto nel mio blog. Lì troverai articoli, tutorial e riflessioni su argomenti affascinanti nel mondo dello sviluppo web, dell'informatica e molto altro. Non vedo l'ora di condividere con te ancora più contenuti interessanti. Ti aspetto nel mio blog!"
      btn="Visita il blog" icon="mdi-arrow-u-right-bottom" />
  </div>

  <div class="slide-in-left-to-rigth d-flex flex-wrap align-center justify-center mt-3">
      <v-img src="/src/assets/home/cv.png" lazy-src="/src/assets/home/cv.png" height="150" />
    <div>
      <text-design title="Curriculum Vitae"
        text="Studio Informatica presso l'Università degli Studi della Basilicata. Mi piace creare esperienze online accattivanti. Puoi consultare il mio CV per sapere di piu sulle mie esperienze e competenze."
        btn="Scarica CV" icon="mdi-download" />
    </div>
  </div>

  <div class="slide-in-rigth-to-left d-flex flex-wrap-reverse align-center justify-center mt-3">
    <div>
      <text-design title="Progetti"
      text="Mi mantengo costantemente aggiornato sulle ultime tendenze e tecnologie, garantendo applicativi moderni, reattivi e che si adattino perfettamente a qualsiasi dispositivo, che sia un enorme schermo o un piccolo telefono. Dai un'occhiata a qualche progetto su cui ho lavorato in passato. Troverai esempi di lavori che mi hanno riempito di orgoglio e spero che ti ispirino per il tuo progetto."
      btn="Vai ai progetti" icon="mdi-arrow-u-right-bottom" />
    </div>
    <v-img src="/src/assets/home/project.png" lazy-src="/src/assets/home/project.png" height="150" />
  </div>

  <div class="slide-in-left-to-rigth d-flex flex-wrap align-center mt-3">
    <v-img src="/src/assets/home/my.png" lazy-src="/src/assets/home/my.png" height="150" />
    <div>
      <text-design title="Chi sono"
      text="Mi metto in gioco, sperimento nuove idee e affronto le sfide con fiducia. Ogni progetto è un'opportunità per crescere e migliorare. Puoi scoprire di più su di me visitando la sezione Chi sono."
      btn="Scopri di più" icon="mdi-arrow-u-right-bottom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CarouselSlides from '@/components/CarouselSlides.vue';
import TypeWriter from '@/components/TypeWriter.vue';
import TextDesign from '@/components/TextDesign.vue';
</script>
