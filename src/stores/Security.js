import Vue from 'vue'

export default ({ endpoint }) => ({

    state: {
        principal: null
    },

    mutations: {
        'security/principal': (state, principal) => {
            state.principal = principal
        }
    },

    actions: {

        'security/signin': ({ commit, dispatch, state }, { email, password }) => {
            return Vue.http
                .post(`${endpoint}/signin`, { email, password })
                .then(
                    (d) => {
                        commit('security/principal', d.data.principal)
                        dispatch('bills/load', { id: d.data.principal.id })
                    }
                )
        },

        'security/signout': ({ commit, state }) => {
            return Vue.http
                .post(`${endpoint}/signout`)
                .then(
                    (d) => { commit('security/principal', null) },
                )
        }
    }
})
