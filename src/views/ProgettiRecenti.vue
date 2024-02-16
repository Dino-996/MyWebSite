<template>
  <v-container>
    <h1 class="text-h2 mb-3">Progetti</h1>
    <v-divider></v-divider>

    <div class="d-flex flex-wrap flex-row align-center justify-space-evenly">
      <div v-for="project in projects" :key="project.id">
        <project-card :title="project.title" :subtitle="project.subtitle" :text="project.text" :icon="project.icon"
          :icon-color="project.iconColor" :action-name="project.actionName" :action-event="project.actionEvent"
          :route="project.route">
        </project-card>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import ProjectCard from '@/components/ProjectCard.vue'
import { reactive } from 'vue'
import Project from '@/interface/Project'

const projects: Array<Project> = reactive([
  {
    id: 0,
    title: 'Puliservice Srls',
    subtitle: 'Applicazione web',
    text: "Innovativa web app dell'impresa Puliservice SRLS. L'obiettivo principale è aumentare la visibilità e incrementare il fatturato dell'impresa attraverso una presenza online di successo.",
    icon: 'mdi-spray-bottle',
    iconColor: 'light-blue',
    route: 'https://firebasestorage.googleapis.com/v0/b/portfolio-davide-sabia.appspot.com/o/assets%2Fproject%2Fpuliservice_logo.png?alt=media&token=df72d0da-d368-4c20-8689-41d2b7be5978&_gl=1*1vx7n9n*_ga*OTI2ODQ3NzE4LjE2OTczMTA0MzM.*_ga_CW55HF8NVT*MTY5NzMxMDQzOS4xLjEuMTY5NzMxMDUyMC40My4wLjA.',
    actionName: 'Source code',
    actionEvent: 'https://github.com/Dino-996/Puliservicesrls',
  },
])
</script>
