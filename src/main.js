import Vue from 'vue'
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from '@/router/router';
import { store } from './store';
import DateFilter from './filters/date';
import * as firebase from 'firebase';
import AlertCmp from './components/shared/Alert.vue'

Vue.config.productionTip = false;

Vue.filter('date', DateFilter);
Vue.component('app-alert', AlertCmp);

const config = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGESENDERID,
};
firebase.initializeApp(config);

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
