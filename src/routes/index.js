import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export const router =  new VueRouter({
    mode: 'history',
    routes: [
        { name: 'home', path: '/home', component: () => import('../components/pages/Home.vue') },
    ]
})