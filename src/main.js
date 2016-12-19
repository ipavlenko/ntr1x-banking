import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
// import VueMy from 'components'

import Stores from 'stores'
import Pages from 'pages'

import App from './App'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMaterial)
// Vue.use(VueMy)

Vue.material.theme.registerAll()

const store = new Vuex.Store({
    strict: true,
    modules: {
        security: Stores.Security({ endpoint: 'http://app2pay.com/ws' }),
        bills: Stores.Bills({ endpoint: 'http://app2pay.com/ws' })
    }
})

const routes = [
    {
        path: '/',
        redirect: '/private/about'
    },
    {
        path: '/private',
        component: Pages.Private,
        children: [
            {
                path: 'about',
                component: Pages.About
            },
            {
                path: 'bills',
                component: Pages.Bills
            },
            {
                path: 'profile',
                component: Pages.Profile
            },
            {
                path: 'calendar',
                component: Pages.Calendar
            }
        ],
        meta: {
            auth: true
        }
    },
    {
        path: '/signin',
        component: Pages.Signin
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!store.state.security.principal) {
            next({
                path: '/signin',
                query: { redirect: to.fullPath }
            })
            return
        }
    }
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    store,
    router,
    components: {
        App
    }
})