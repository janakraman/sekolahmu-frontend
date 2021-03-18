import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

dom.watch()
library.add(faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin, faCaretDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
