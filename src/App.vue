<template>
  <div>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
        <v-list-item v-if="userIsAuthenticated" @click="onLogout">
          <v-list-item-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-action>
          <v-list-item-content>Logout</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-app-bar-nav-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to='/' tag="span" style="cursor:pointer;">DevMeetup</router-link> 
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn text v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import * as firebase from 'firebase';

export default {
  data() {
    return {
      sideNav: false,
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.$store.dispatch('autoSignIn', user);
        this.$store.dispatch('fetchUserData');
      }
    })
    this.$store.dispatch('loadMeetups');
  },
  computed: {
    menuItems() {
      let menuItems =  [
        {
          icon: 'mdi-face',
          title: 'Sign up',
          link: '/signin',
        },
        {
          icon: 'mdi-lock-open',
          title: 'Sign in',
          link: '/signup',
        },
      ];

      if(this.userIsAuthenticated) {
        menuItems = [
          {
            icon: 'mdi-account-supervisor',
            title: 'View Meetups',
            link: '/meetups',
          },
          {
            icon: 'mdi-room',
            title: 'Organize Meetups',
            link: '/createMeetup',
          },
          {
            icon: 'mdi-person',
            title: 'Profile',
            link: '/profile',
          },
        ]
      }

      return menuItems;
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style>
@import url('./styles/global.scss');
</style>
