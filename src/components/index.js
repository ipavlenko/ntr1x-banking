import Sidenav from './Sidenav/Sidenav.vue'
import ContactsList from './ContactsList/ContactsList.vue'

const options = {
    Sidenav,
    ContactsList
}

options.install = function(Vue) {
    for (let c in options) {
        let component = options[c]
        Vue.component(component.name, Vue.extend(component))
    }
}

window.AppComponents = options

export default options
