import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from './material'
import AppComponents from './components'
// import VueMy from 'components'

import Stores from 'stores'
import Pages from 'pages'

import App from './App'

import $ from 'jquery'
import jQueryTouchEvents from 'jquery-touch-events'

import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.scss'

jQueryTouchEvents($)

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(AppComponents)

// console.log(VueMaterial)
// Vue.use(VueMy)

// Vue.material.theme.registerAll()

const store = new Vuex.Store({
    strict: true,
    modules: {
        security: new Stores.Security(),
        bills: new Stores.Bills()
    }
})

const routes = [
    {
        path: '/',
        redirect: { path: '/private/accounts' }
    },
    {
        path: '/private',
        component: Pages.Private,
        children: [
            {
                path: 'accounts',
                component: Pages.Accounts
            },
            {
                path: 'contacts',
                component: Pages.Contacts
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
    //mode: window.cordova ? 'hash' : 'history',
    mode: 'hash',
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.auth)) {
//         if (!store.state.security.principal) {
//             next({
//                 path: '/signin',
//                 query: { redirect: to.fullPath }
//             })
//             return
//         }
//     }
//     next()
// })

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
