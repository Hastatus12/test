import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app')
