import { createRouter, createWebHistory } from 'vue-router'
import HandlingUserInput from './views/HandlingUserInput.vue'
import AttributeBindings from './views/AttributeBindings.vue'
import ConditionalsAndLoops from './views/ConditionalsAndLoops.vue'
import FormBindings from './views/FormBindings.vue'
import SimpleComponent from './views/simpleComponent/SimpleComponent.vue'
import MarkdownEditor from './views/MarkdownEditor.vue'
import FetchingData from './views/FetchingData.vue'
import ComputedProperty from './views/ComputedProperty.vue'

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
    },
    {
        path: '/SimpleComponent',
        name: 'SimpleComponent',
        component: SimpleComponent,
    },
    {
        path: '/MarkdownEditor',
        name: 'MarkdownEditor',
        component: MarkdownEditor,
    },
    {
        path: '/FetchingData',
        name: 'FetchingData',
        component: FetchingData,
    },
    {
        path: '/ComputedProperty',
        name: 'ComputedProperty',
        component: ComputedProperty,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router