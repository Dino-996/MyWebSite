<template>
  <v-container>
      <h2 class="text-h2">{{ title }}</h2>
      <v-divider />
      <br>
      <p class="text-p">{{ text }}</p>
      <br>
      <div class="align-left">
        <v-btn :append-icon="icon" variant="text">{{ btn }}</v-btn>
      </div>
  </v-container>
</template>

<script lang="ts" setup>

defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  btn: { type: String, require: true },
  path: { type: String, require: false },
  icon: { type: String, require: false, default: undefined }
});

</script>
