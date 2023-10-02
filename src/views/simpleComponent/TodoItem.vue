<template>
    <li>{{ todo.text }}</li>
</template>

<script setup lang="ts">
const props = defineProps({
    todo: Object
})
</script>
