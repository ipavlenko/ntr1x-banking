export default () => ({

    state: {
        // incoming: []
    },

    mutations: {
        'contacts/store': (state, contact) => {
            console.log(contact)
            // state.incoming = incoming
        }
    }
})
