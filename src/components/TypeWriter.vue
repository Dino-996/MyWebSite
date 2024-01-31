<template>
    <div class="typewriter">
        <h1 class="text-p">{{ text }}</h1>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    text: { type: String, require: true },
    number: { type: String, require: true },
})

document.documentElement.style.setProperty('--number', props.number!)
</script>

<style scoped>
:root {
    --number: '5';
}

.typewriter h1 {
    font-family: monospace;
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid;
    /* The typwriter cursor */
    white-space: nowrap;
    /* Keeps the content on a single line */
    margin: 0 auto;
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em;

    /* Adjust as needed */
    animation:
        typing 3.5s steps(var(--number), end),
        blink-caret 0.5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: rgb(121, 121, 121);
    }
}
</style>
