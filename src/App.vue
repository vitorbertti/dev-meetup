<template>
  <div>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account-supervisor</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav"></v-app-bar-nav-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <v-icon left>mdi-account-supervisor</v-icon>
          View Meetups
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
    }
      
  }
}
</script>

<style>

</style>
