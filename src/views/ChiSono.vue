<template>
  <v-container>

    <div>
      <text-design title="Su di me"
        text="Studio Informatica presso l'Università degli Studi della Basilicata qui a Potenza. Ho da sempre una forte passione e curiosità per il mondo tech, con una particolare attenzione verso la programmazione in generale. Bevo tanto caffé ☕." />
    </div>

    <div class="d-flex flex-wrap justify-space-between">
      <div>
        <p class="text-h4">Lavori occasionali</p>
        <time-line v-for="work in works" :key="work.id" :title="work.title" :text="work.text" :start-day="work.startDay"
          :start-month="work.startMonyh" :start-year="work.startYear" :end-day="work.endDay" :end-month="work.endMonth"
          :end-year="work.endYear" :dot-color="work.dotColor" :icon-timeline="work.icon" :name="work.name"
          :position="work.position" :button="work.button" :button-event="work.buttonEvent" :button-img="work.buttonImg" />
      </div>

      <div class="mt-4">
        <p class="text-h4">Istruzione</p>
        <time-line v-for="education in educations" :key="education.id" :title="education.title" :text="education.text"
          :start-day="education.startDay" :start-month="education.startMonyh" :start-year="education.startYear"
          :end-day="education.endDay" :end-month="education.endMonth" :end-year="education.endYear"
          :dot-color="education.dotColor" :icon-timeline="education.icon" :name="education.name"
          :position="education.position" />
      </div>

      <div class="mt-4">
        <p class="text-h4">Certificazioni</p>
        <time-line v-for="certificate in certification" :key="certificate.id" :title="certificate.title"
          :text="certificate.text" :start-day="certificate.startDay" :start-month="certificate.startMonyh"
          :start-year="certificate.startYear" :end-day="certificate.endDay" :end-month="certificate.endMonth"
          :end-year="certificate.endYear" :dot-color="certificate.dotColor" :icon-timeline="certificate.icon"
          :name="certificate.name" :position="certificate.position" :button="certificate.button"
          :button-event="certificate.buttonEvent" :button-img="certificate.buttonImg" />
      </div>

    </div>

  </v-container>
</template>

<script lang="ts" setup>
import TimeLine from '@/components/TimeLine.vue';
import TextDesign from '@/components/TextDesign.vue';
import { reactive } from 'vue';

let works = reactive([
  { id: 0, title: "Web Application", text: "Web app dell'impresa omonima", startDay: "08", startMonyh: "06", startYear: "2023", endDay: "12", endMonth: "09", endYear: "2023", dotColor: "blue-darken-2", icon: "mdi-spray-bottle", name: "Puliservice SRLS", position: "Piazzale Budapest 9, 85100, PZ", button: "Source code", buttonEvent: "https://github.com/Dino-996/Puliservicesrls", buttonImg: "mdi-link" },
]);

let educations = reactive([
  { id: 0, title: "Laurea Triennale", text: "Scienze e Tecnologie Informatiche", startDay: "09", startMonyh: "09", startYear: "2021", endDay: "", endMonth: "", endYear: "", dotColor: "red-darken-3", icon: "mdi-school", name: "Università degli Studi della Basilicata", position: "Viale Ateneo Lucano, 10 - 85100 Potenza (PZ)" },
]);

let certification = reactive([
  { id: 0, title: "Cybersecurity Fundamentals", text: "Corso base sulla sicurezza informatica", startDay: "17", startMonyh: "03", startYear: "2023", endDay: "30", endMonth: "03", endYear: "2023", dotColor: "deep-orange-darken-2", icon: "mdi-security", name: "IBM Skillsbuild", position: "Online", button: "Certificazione", buttonEvent: "https://www.credly.com/badges/ac00f609-137c-4f81-9a2a-a3179ac4003c/linked_in_profile", buttonImg: "mdi-link" },
  { id: 1, title: "Javascript", text: "Corso avanzato Javascript", startDay: "01", startMonyh: "01", startYear: "2023", endDay: "04", endMonth: "01", endYear: "2023", dotColor: "yellow-darken-1", icon: "mdi-cloud-braces", name: "Learnn", position: "Online", button: "Certificazione", buttonEvent: "https://learnn.com/v/b953f666-ba46-4146-b5b5-410d4d931332/", buttonImg: "mdi-link" },
  { id: 2, title: "Web Developement", text: "Corso completo sullo sviluppo web", startDay: "10", startMonyh: "12", startYear: "2022", endDay: "27", endMonth: "12", endYear: "2022", dotColor: "teal-lighten-1", icon: "mdi-code-json", name: "Learnn", position: "Online", button: "Certificazione", buttonEvent: "https://learnn.com/v/ca7818fa-0f89-4629-9571-b3d7922d3079/", buttonImg: "mdi-link" },
]);

</script>
