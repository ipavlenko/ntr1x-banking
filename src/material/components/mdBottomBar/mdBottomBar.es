import theme from '../../core/components/mdTheme/mixin'

export default {
    props: {
        mdShift: Boolean
    },
    mixins: [theme],
    computed: {
        classes() {
            return this.mdShift ? 'md-shift' : 'md-fixed'
        }
    }
}
