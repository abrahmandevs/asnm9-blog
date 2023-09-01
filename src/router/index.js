import { createRouter, createWebHistory } from "vue-router";

import details from '../views/Details.vue'
import Home from '../sections/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/details',
            name: 'details',
            component: details
        },
    ]
})
export default router