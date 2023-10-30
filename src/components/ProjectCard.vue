<template>
  <v-card max-width="300" class="mt-5 mr-3 mb-3">
    <div class="d-flex justify-center" >
        <v-img :src="route" :lazy-src="route" height="200" max-width="200"></v-img>
    </div>
    <template v-slot:prepend>
      <v-icon :icon="icon" :color="iconColor"></v-icon>
    </template>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:subtitle>
      {{ subtitle }}
    </template>
    <v-card-text>
      {{ text }}
    </v-card-text>
    <v-divider></v-divider>
    <v-card-action class="align-left">
      <v-btn class="mb-3 mr-3 mt-3" role="link" :href="actionEvent" target="_blank" size="small"
        append-icon="mdi-arrow-right-bottom">{{ actionName }}</v-btn>
    </v-card-action>
  </v-card>
</template>

<script lang="ts" setup>

defineProps({
  title: { type: String, default: 'Title', require: true },
  subtitle: { type: String, default: 'Subtitle', require: false },
  text: { type: String, default: 'Text', require: true },
  icon: { type: String, default: 'mdi-home', require: true },
  iconColor: { type: String, default: 'red', require: false },
  route: { type: String, require: true },
  actionName: { type: String, default: 'Action', require: true },
  actionEvent: { type: String, default: 'https://www.google.com', require: true },
});

</script>
