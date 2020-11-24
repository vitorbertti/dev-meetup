import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      loadedMeetups: [
         {imageUrl: '', id: '12312435345', title: 'Meetup in New York', date: '2020-11-23'},
         {imageUrl: '', id: '23423444343', title: 'Meetup in Paris', date: '2020-10-21'},
      ],
      user: {
         id: '3782734t8723t4',
         registeredMeetups: ['38244873824'],
      }
   },
   mutations: {},
   actions: {},
   getters: {
      loadedMeetups(state) {
         return state.loadedMeetups.sort((meetupA, meetupB) => {
            return meetupA.date > meetupB.date;
         })
      },
      featuredMeetups(state, getters) {
         return getters.loadedMeetups.slice(0, 5);
      },
      loadedMeetup(state) {
         return (meetupId => {
            return state.loadedMeetups.find(meetup => {
               return meetup.id == meetupId;
            })
         })
      }
   },
})