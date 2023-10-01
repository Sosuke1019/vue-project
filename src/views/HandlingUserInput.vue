<template>
    <h1 :class="{ purple: isPurple}">{{ title }}</h1>
    <button @click="reverseMessage">
        reverse
    </button>
    <button @click="changeColor">
        change color
    </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

let title = ref("Hello World!")

const isPurple = ref(true)

const reverseMessage = () => {
    title.value = title.value.split('').reverse().join('');
};

const changeColor = () => {
    isPurple.value = !isPurple.value;
};
</script>

<style>
.purple {
    color:darkorchid;
}
</style>