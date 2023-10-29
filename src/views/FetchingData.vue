<template>
    <h1>Latest Vue Core Commits</h1>
    <template v-for="branch in branches">
        <input type="radio"
        :id="branch"
        :value="branch"
        name="branch"
        v-model="currentBranch">
        <label :for="branch">{{ branch }}</label>
    </template>
    <p>vuejs/vue@{{ currentBranch }}</p>
</template>

<script setup lang="ts">
    import {ref, watchEffect} from 'vue'

    const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
    const branches = ['main', 'v2-compat']

    const currentBranch = ref(branches[0])
    const commits = ref(null)
</script>

<style>

</style>