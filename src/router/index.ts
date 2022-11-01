import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home/Home.vue') 
    },
    {
        path:'/aboutme',
        name:'aboutme',
        component:()=>import('../pages/Aboutme/Aboutme.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router