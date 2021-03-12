import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import VueScrollTo from 'vue-scrollto';

import 'material-icons/iconfont/material-icons.css';
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false

Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
  vuetify,
}).$mount('#app')
