export default () => ({

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
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (email === 'admin@example.com' && password === 'admin123') {
                        commit('security/principal', { email: email })
                        resolve(state.principal)
                    } else {
                        reject()
                    }
                }, 200)
            })
        },

        'security/signout': ({ commit, state }) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('security/principal', null)
                    resolve(state.principal)
                }, 200)
            })
        }
    }
})
