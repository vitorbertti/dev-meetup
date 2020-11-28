import Vue from 'vue'
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from '@/router/router';
import { store } from './store';
import DateFilter from './filters/date';

Vue.config.productionTip = false;

Vue.filter('date', DateFilter);

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
