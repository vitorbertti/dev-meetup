<template>
  <div>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn text v-for="item in menuItems" :key="item.title">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        {
          icon: 'mdi-account-supervisor',
          title: 'View Meetups',
        },
        {
          icon: 'mdi-room',
          title: 'Organize Meetups',
        },
        {
          icon: 'mdi-person',
          title: 'Profile',
        },
        {
          icon: 'mdi-face',
          title: 'Sign up',
        },
        {
          icon: 'mdi-lock-open',
          title: 'Sign in',
        },
      ]
    }
      
  }
}
</script>

<style>
@import url('./styles/global.scss');
</style>
