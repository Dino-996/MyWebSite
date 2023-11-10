<template>
  <v-card max-width="300" class="mt-5 mr-3 mb-3">
    <v-img
      aspect-ratio="1/1"
      :src="route"
      :lazy-src="route"
      :width="250"
      cover
    ></v-img>
    <template v-slot:prepend>
      <v-icon :icon="icon" :color="iconColor"></v-icon>
    </template>

    <v-card-item>
      <v-card-title>
        {{ title }}
      </v-card-title>
    </v-card-item>

    <v-divider />

    <v-card-item>
      <v-card-subtitle>
        {{ subtitle }}
      </v-card-subtitle>
    </v-card-item>

    <v-divider />

    <v-card-item>
      <v-card-text>
        {{ text }}
      </v-card-text>
    </v-card-item>

    <v-divider />

    <v-card-actions class="align-left">
      <v-btn
        class="mb-3 mr-3 mt-3"
        :href="actionEvent"
        target="_blank"
        append-icon="mdi-arrow-right-bottom"
        >{{ actionName }}</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
defineProps({
  title: { type: String, default: "Title", require: true },
  subtitle: { type: String, default: "Subtitle", require: true },
  text: { type: String, default: "Text", require: true },
  icon: { type: String, default: "mdi-home", require: true },
  iconColor: { type: String, default: "red", require: false },
  actionName: { type: String, default: "Action", require: true },
  actionEvent: {
    type: String,
    require: true,
  },
  route: { type: String, require: true },
});
</script>
