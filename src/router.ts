import { createRouter, createWebHistory } from 'vue-router'
import HandlingUserInput from './views/HandlingUserInput.vue'
import AttributeBindings from './views/AttributeBindings.vue'

const routes = [
    {
        path: '/',
        name: 'HandlingUserInput',
        component: HandlingUserInput,
    },
    {
        path: '/AttributeBindings',
        name: 'AttributeBindings',
        component: AttributeBindings,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router