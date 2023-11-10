<template>
  <v-container>
    <div class="d-flex justify-start align-center">
      <div>
        <h1 class="text-h1 slide-in-rigth-to-left">Ehil&agrave;</h1>
      </div>
      <div class="slide-in-left-to-rigth">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fwaving.png?alt=media&token=a70578e5-1fd0-41bd-b49f-7757a9e522f5&_gl=1*1hz6e1*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzY2MS41OC4wLjA."
          lazy-src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fwaving.png?alt=media&token=a70578e5-1fd0-41bd-b49f-7757a9e522f5&_gl=1*1hz6e1*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzY2MS41OC4wLjA."
          height="150"
          width="100"
          alt="penguin"
          id="block-penguin"
        />
      </div>
    </div>

    <br />

    <type-writer text="Benvenuto!" number="10" />

    <div class="slide-in-rigth-to-left mt-3">
      <text-design
        title="La passione per lo sviluppo software ci accomuna?"
        text="Ti invito a fare un salto nel mio blog. Lì troverai articoli, tutorial e riflessioni su argomenti affascinanti nel mondo dello sviluppo, dell'informatica e molto altro. Non vedo l'ora di condividere con te ancora più contenuti interessanti. Ti aspetto nel mio blog!"
        btn="Visita il blog"
      />
      <div class="align-left">
        <v-btn
          class="mr-3 mb-5"
          append-icon="mdi-arrow-u-right-bottom"
          variant="text"
          v-on:click="navigator('/blog')"
          >Visita il blog</v-btn
        >
      </div>
    </div>

    <div>
      <carousel-slides
        slide-one="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fhtml-5.png?alt=media&token=a51e10e8-ca2f-47b6-95d8-5a432b57f17c&_gl=1*1l23c5x*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzMzMi42MC4wLjA."
        slide-two="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fcss-3.png?alt=media&token=8619abbd-b465-451b-99f1-90f984580566&_gl=1*cj3o54*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzE5MS42MC4wLjA."
        slide-three="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fjs.png?alt=media&token=b072e53c-955d-4c6a-b9e3-8d07aeedae82&_gl=1*8lup75*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzM4Ny41LjAuMA."
        slide-four="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fnode-js.png?alt=media&token=6d8423a5-7896-45f3-9f81-7b51f63b82cd&_gl=1*x52icd*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzQ2Ny42MC4wLjA."
        slide-five="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fnpm.png?alt=media&token=e38f5853-12a8-4997-9d6a-103fc3ca0ce8&_gl=1*7krz8i*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzUwMy4yNC4wLjA."
        slide-six="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Ftypescript.png?alt=media&token=93bf3ae9-e026-4464-b54a-d81fbad55a35&_gl=1*e9v2ml*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzUzNC42MC4wLjA."
        slide-seven="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fvisual-studio.png?alt=media&token=a51d4147-f0e1-4c6e-bfe3-9e089a2de8f6&_gl=1*1avogbm*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzU5MS4zLjAuMA.."
        slide-eight="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcarousel%2Fjava.png?alt=media&token=6e28dfc1-f257-41ad-93c4-7ae3f8c7dd7b&_gl=1*1yosu4*_ga*ODc4NzIxNDgzLjE2OTU1ODUwMjk.*_ga_CW55HF8NVT*MTY5NTg0Mjg2MS40LjEuMTY5NTg0MzYxNi4zOC4wLjA."
      />
    </div>

    <div
      class="slide-in-left-to-rigth d-flex flex-wrap align-center justify-center mt-3"
    >
      <v-img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcv.png?alt=media&token=fd5a4fc4-108c-4160-a8f0-9fa699fd6c60"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fcv.png?alt=media&token=fd5a4fc4-108c-4160-a8f0-9fa699fd6c60"
        width="150"
        height="150"
      />
      <div>
        <text-design
          title="Curriculum Vitae"
          text="Mi piace creare esperienze online accattivanti. Puoi consultare il mio CV per sapere di piu sulle mie esperienze e competenze."
        />
        <div class="align-left">
          <v-btn
            class="mr-3 mb-5"
            append-icon="mdi-download"
            v-on:click="download()"
            title="Scarica CV"
            aria-valuetext="Scarica CV"
            >Scarica CV</v-btn
          >
        </div>
      </div>
    </div>

    <div
      class="slide-in-rigth-to-left d-flex flex-wrap-reverse align-center justify-center mt-3"
    >
      <div>
        <text-design
          title="Progetti"
          text="Troverai esempi di lavori che mi hanno riempito di orgoglio e spero che ti ispirino per il tuo progetto."
        />
        <div class="align-left">
          <v-btn
            class="mr-3 mb-5"
            append-icon="mdi-arrow-u-right-bottom"
            v-on:click="navigator('/progetti')"
            variant="text"
            >Vai ai progetti</v-btn
          >
        </div>
      </div>
      <v-img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fproject.png?alt=media&token=67e85210-2f8c-453a-8d60-264eba18c3e8"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fproject.png?alt=media&token=67e85210-2f8c-453a-8d60-264eba18c3e8"
        width="150"
        height="150"
      />
    </div>

    <div class="slide-in-left-to-rigth d-flex flex-wrap align-center mt-3">
      <v-img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fmy.png?alt=media&token=d6f75299-acc0-4318-9974-0d5ce8511598"
        lazy-src="https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fmy.png?alt=media&token=d6f75299-acc0-4318-9974-0d5ce8511598"
        width="150"
        height="150"
      />
      <div>
        <text-design
          title="Chi sono"
          text="Mi metto in gioco, sperimento nuove idee e affronto le sfide con fiducia. Puoi scoprire di più su di me visitando la sezione Chi sono."
        />
        <div class="align-left">
          <v-btn
            class="mr-3 mb-5"
            append-icon="mdi-arrow-u-right-bottom"
            v-on:click="navigator('/chisono')"
            variant="text"
            >Scopri di più</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import CarouselSlides from "@/components/CarouselSlides.vue";
import TypeWriter from "@/components/TypeWriter.vue";
import TextDesign from "@/components/TextDesign.vue";
import download from "@/utils/download";
import navigator from "@/utils/navigator";
</script>
