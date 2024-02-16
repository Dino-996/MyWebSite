<template>
  <v-container>
    <p class="text-h3">{{ title }}</p>
    <v-carousel height="350" hide-delimiters progress="primary" :show-arrows="false" cycle>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet class="bg-transparent" height="100%" rounded="xl">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <span v-if="i === 0">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
              <span v-if="i === 1">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
              <span v-if="i === 2">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
              <span v-if="i === 3">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
              <span v-if="i === 4">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
              <span v-if="i === 5">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
              <span v-if="i === 6">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
              <span v-if="i === 7">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
              <span v-if="i === 8">
                <img :src="slide" :lazy-src="slide" alt="Carousel" width="300" />
              </span>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <br />
    </v-carousel>
  </v-container>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Tech Stack', require: false },
  slideOne: { type: String, require: true },
  slideTwo: { type: String, require: true },
  slideThree: { type: String, require: true },
  slideFour: { type: String, require: true },
  slideFive: { type: String, require: true },
  slideSix: { type: String, require: true },
  slideSeven: { type: String, require: true },
  slideEight: { type: String, require: true },
})

const slides = reactive([
  props.slideOne,
  props.slideTwo,
  props.slideThree,
  props.slideFour,
  props.slideFive,
  props.slideSix,
  props.slideSeven,
  props.slideEight,
])
</script>
