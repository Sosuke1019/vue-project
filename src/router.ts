import { createRouter, createWebHistory } from 'vue-router'
import HandlingUserInput from './views/HandlingUserInput.vue'
import AttributeBindings from './views/AttributeBindings.vue'
import ConditionalsAndLoops from './views/ConditionalsAndLoops.vue'
import FormBindings from './views/FormBindings.vue'

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
    },
    {
        path: '/ConditionalsAndLoops',
        name: 'ConditionalsAndLoops',
        component: ConditionalsAndLoops,
    },
    {
        path: '/FormBindings',
        name: 'FormBindings',
        component: FormBindings,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router