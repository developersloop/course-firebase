import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index.js'
import firebase from 'firebase'

// import AuthGuard from './ValidGuard'
Vue.use(VueRouter)
const router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            meta: { requiresAuth: true },
            component: () => import('../components/pages/Home/Home.vue')
        },
        { 
            path: '/login', 
            name: 'login', 
            component: () => import('../components/pages/Login.vue') 
        },
        {
            path: '/about',
            name: 'about',
            meta: { requiresAuth: true },
            component: () => import('../components/pages/About/About.vue')
        },
        { path: '*', redirect: '/login'}
    ]
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    if (requiresAuth && !currentUser) next('/login')
    else if (requiresAuth && currentUser) next()
    else next()
})

export default router