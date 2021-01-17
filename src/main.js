import Vue from 'vue'
import router  from './routes/index'
import App from './components/App.vue'
import store from './store/index'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false


Vue.use(Vuetify)
new Vue({
  router,
  Vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
