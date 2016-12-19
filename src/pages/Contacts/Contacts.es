export default {
    name: 'bills',
    computed: {
        items: {
            get: function () {
                return this.$store.state.bills.incoming || []
            }
        }
    }
}
