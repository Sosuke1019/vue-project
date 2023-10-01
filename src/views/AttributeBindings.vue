<template>
    <p>
        <span :title="message">Hover your mouse over me for a few seconds to see my dynamically bound title!</span>
    </p>
    <p :class="{ red: isRed }" @click = "toggleRed">
        <span>This should be red... but click me to toggle it. </span>
    </p>
    <p :style="{ color }" @click="toggleColor">
        <span>This should be green, and should toggle between green and blue on click. </span>
    </p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref('Hello world!')
const isRed = ref(true)
const color = ref('green')

const toggleRed = (() => {
    isRed.value = !isRed.value
})

const toggleColor = (() => {
    color.value = color.value === 'blue' ? 'green' : 'blue'
})
</script>

<style>
.red {
    color: red;
}
</style>