<template>
  <v-container class="mt-5 lightSpeedIn">
    <div class="mt-3 ml-3 mr-3 mb-3 text-center">
      <h1>404 - OOOPS!</h1>
      <p class="mt-3 mb-3 pl-5 pr-5">
        La pagina che stai cercando potrebbe essere stata rimossa ha cambiato
        nome o è temporaneamente non disponibile.
      </p>
      <v-btn
        append-icon="mdi-airplane"
        variant="text"
        @click.once="$router.push('/')"
        >Torna alla base</v-btn
      >
    </div>
  </v-container>
</template>
