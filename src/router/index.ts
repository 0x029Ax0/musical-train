import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Pricing from '@/views/Pricing.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';

import Results from '@/views/Results.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/results',
        name: 'Results',
        component: Results,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
