import Sidenav from './Sidenav/Sidenav.vue'

const options = {
    Sidenav
}

options.install = function(Vue) {
    for (let c in options) {
        let component = options[c]
        Vue.component(component.name, Vue.extend(component))
    }
}

window.AppComponents = options

export default options
