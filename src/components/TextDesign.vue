<template>
  <v-container>
    <h2 class="text-h2">{{ title }}</h2>
    <v-divider />
    <br />
    <p class="text-p">{{ text }}</p>
    <br />
  </v-container>
</template>

<script lang="ts" setup>
defineProps({
  title: { type: String, required: true, default: "title" },
  text: { type: String, required: true, default: "text" },
});
</script>
