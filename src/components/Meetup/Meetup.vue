<template>
  <v-container>
     <v-layout row wrap>
        <v-flex xs12>
           <v-card>
              <v-card-title>
                 <h6 class="primary--text">{{ meetup.title }}</h6>
              </v-card-title>
              <v-card-media :src="meetup.imageUrl" height="400px" ></v-card-media>
              <v-card-text>
                 <div class="info--text">{{ meetup.date }} - Where it takes place</div>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere voluptatibus odio distinctio recusandae quisquam cupiditate nesciunt dicta ratione accusantium! Consequatur necessitatibus quo eius, aliquam veniam tempora nulla quidem dicta?
              </v-card-text>
              <v-card-action>
                 <v-spacer></v-spacer>
                 <v-btn class="primary">Register</v-btn>
              </v-card-action>
           </v-card>
        </v-flex>
     </v-layout>
  </v-container>
</template>

<script>
export default {
   props: ['id'],
   computed: {
      meetup() {
         return this.$store.getters.loadedMeetup(this.id);
      }
   }
}
</script>

<style>

</style>