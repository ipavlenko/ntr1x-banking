export default () => ({

    state: {
        incoming: []
    },

    mutations: {
        'bills/store': (state, incoming) => {
            state.incoming = incoming
        }
    },

    actions: {

        'bills/load': ({ commit, state }) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('bills/store', [
                        { id: 1, purpose: 'Красная площадь д. 1: Отопление', value: 2000, status: null },
                        { id: 2, purpose: 'Красная площадь д. 1: Вывоз мусора', value: 750, status: null },
                        { id: 3, purpose: 'Красная площадь д. 1: Водоснабжение и водоотведение', value: 1500, status: null },
                        { id: 4, purpose: 'Штраф за парковку в неположенном месте: o001oo177', value: 500, status: null },
                        { id: 5, purpose: 'Штраф за стоп-линию: o001oo177', value: 500, status: null },
                        { id: 6, purpose: 'Платёж по кредиту на машину', value: 12000, status: null }
                    ])
                    resolve(state.incoming)
                }, 200)
            })
        },

        'bills/accept': ({ commit, state }, { id }) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    for (let b of state.incoming) {
                        if (b.id === id) {
                            b.status = 'accepted'
                            resolve(b)
                            return
                        }
                    }

                    reject({
                        message: 'No data'
                    })
                }, 200)
            })
        },

        'bills/decline': ({ commit, state }, { id }) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    for (let b of state.incoming) {
                        if (b.id === id) {
                            b.status = 'declined'
                            resolve(b)
                            return
                        }
                    }

                    reject({
                        message: 'No data'
                    })
                }, 200)
            })
        }
    }
})
