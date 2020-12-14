import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter)
import Home from './pages/home.vue';
import ListChap from './pages/ListChap.vue';
const routes = [
    {
        path: '/',
        component: Home,
        name: "Home"
    },
    {
        path: '/doc-truyen-hay/:slug/:id',
        component: ListChap,
        name: "ListChap"
    }
]

export default new VueRouter({ mode: 'history', routes: routes })