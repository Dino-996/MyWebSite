<template>
    <v-dialog width="100%">
        <template v-slot:activator="{ props }">
            <v-btn :prepend-icon="icon" v-bind="props" variant="text">{{
                title
            }}</v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card max-height="100%" :title="title" density="compact">
                <v-card-text>
                    <v-card height="700" max-width="100%">
                        <iframe
                            style="width: 100%; height: 100%"
                            :src="link"
                        ></iframe>
                    </v-card>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        text="Chiudi"
                        variant="text"
                        @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script lang="ts" setup>
defineProps({
    title: { type: String, default: 'text', required: true },
    icon: { type: String, required: true },
    link: { type: String, default: 'text', required: true },
})
</script>
