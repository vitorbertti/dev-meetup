import Vue from 'vue'
import vuetify from '@/plugins/vuetify';
import App from './App.vue';
import router from '@/router/router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router,
}).$mount('#app');
