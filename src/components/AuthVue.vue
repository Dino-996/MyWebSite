<template>
  <v-container>
    <h1>Nuovo utente</h1>
    <v-btn class="text-subtitle-1" prepend-icon="mdi-google" @click="auth.googleAuth">Accedi con Google per commentare</v-btn>
    <v-btn class="text-subtitle-1" prepend-icon="mdi-logout" @click="auth.signOutUser">Logout</v-btn>
    <span v-if="auth.emailVerified.value">
      Sei online {{ auth.displayName.value }}
    </span>
    <span v-else>
      Sei offline
    </span>
  </v-container>
</template>

<script setup lang="ts">
import auth from "../utils/auth";

</script>
