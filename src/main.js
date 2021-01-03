import Vue from 'vue'
import { router } from './routes/index'
import App from './components/App.vue'
import store from './store/index'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import './registerServiceWorker'
import firebase from 'firebase/app'
Vue.config.productionTip = false


Vue.use(Vuetify)
new Vue({
  router,
  Vuetify,
  store,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDOK4uT83UcL94zr6xHJd33qxADoRV3rPw',
      authDomain: 'curso-udemy-f0b14.firebaseapp.com',
      databaseURL: 'https://curso-udemy-f0b14.firebaseio.com',
      projectId: 'curso-udemy-f0b14',
      storageBucket: 'curso-udemy-f0b14.appspot.com',
      messagingSenderId: '162726291250',
      appId: '1:162726291250:web:3aab88f700b9b2a0bb192b',
      measurementId: 'G-HC5KMM1H9L'
    });
    firebase.firestore().settings({ timestampsInSnapshots: true})
  },
  render: h => h(App)
}).$mount('#app')
