import { createRouter, createWebHistory } from 'vue-router'
import HandlingUserInput from './views/HandlingUserInput.vue'
import About from './views/About.vue'

const routes = [
    {
        path: '/',
        name: 'HandlingUserInput',
        component: HandlingUserInput,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router