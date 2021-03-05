import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  render: h => h(App),
}).$mount('#app')
