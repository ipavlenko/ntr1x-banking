export default {
    name: 'private',
    data: function() {
        return {
            transitionName: this.transitionName
        }
    },
    watch: {
        $route: function(to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
