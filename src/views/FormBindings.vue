<template>
    <h2>Text Input</h2>
    <input v-model="text"> {{ text }}

    <h2>Checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Checked: {{ checked }}</label>

    <h2>Multi checkbox</h2>
    <input type="checkbox" id="Jack" value="Jack" v-model="checkedNames">
    <label>Jack</label>
    <input type="checkbox" id="John" value="John" v-model="checkedNames">
    <label>John</label>
    <input type="checkbox" id="Mike" value="Mike" v-model="checkedNames">
    <p>checked names: <pre>{{ checkedNames }}</pre></p>

    <h2>Radio</h2>
    <input type="radio" id="one" value="One" v-model="radio">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="radio">
    <label for="two">Two</label>
    <p>Picked:{{ radio }}</p>
    
    <h2>Select</h2>
    <select v-model="selected">
        <option disabled>Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected:{{ selected }}</span>

    <h2>Multi Select</h2>
    <select v-model="multiselected" multiple style="width: 100px">
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected:{{ multiselected }}</span>
</template>

<script setup lang="ts">
import { ref } from "vue"

const text = ref("Edit me")
const checked = ref(true)
const checkedNames = ref([])
const radio = ref()
const selected = ref()
const multiselected = ref([])
</script>