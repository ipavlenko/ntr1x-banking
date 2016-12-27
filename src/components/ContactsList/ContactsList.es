export default {
    name: 'contacts-list',
    props: {
        size: Number,
        extra: Object
    },
    data: function() {
        return {
            form: this.form
        }
    },
    created: function() {

        this.form = {
            name: 'Ivanov',
            age: 35
        }
    },
    methods: {
        send: function() {
            this.$store.commit('contacts/store', this.form)
            // alert(JSON.stringify(this.form))
        }
    }
    //,
    // computed: {
    //     items: {
    //         get: function () {
    //             return this.$store.state.bills.incoming || []
    //         }
    //     }
    // }
}
