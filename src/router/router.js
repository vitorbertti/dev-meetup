import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import VueRouter from 'vue-router';
import App from '../App.vue'

Vue.use(Router);

export default new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'App',
         component: App,
      },
      {
         path: '/hello',
         name: 'Hello',
         component: HelloWorld,
      }
   ]
})