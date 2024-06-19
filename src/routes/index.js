import { createRouter, createWebHistory } from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Product from '@/components/Product.vue'
import ServicesOffered from '@/components/ServicesOffered.vue'
const routes = [{
        path: '/',
        name: 'home',
        component: Homepage,
    },
    {
        path: '/Product',
        name: 'Product',
        component: Product,
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/ServicesOffered',
        name: 'ServicesOffered',
        component: ServicesOffered,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router