import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      loadedMeetups: [
         {imageUrl: '', id: '12312435345', title: 'Meetup in New York', date: '2020-11-23', location: 'New York', description: 'New York'},
         {imageUrl: '', id: '23423444343', title: 'Meetup in Paris', date: '2020-10-21', location: 'Paris', description: 'Its Paris'},
      ],
      user: {
         id: '3782734t8723t4',
         registeredMeetups: ['38244873824'],
      }
   },
   mutations: {
      createMeetup(state, payload) {
         state.loadedMeetups.push(payload);
      },
   },
   actions: {
      createMeetup({commit}, payload) {
         const meetup = {
            title: payload.title,
            location: payload.location,
            imageUrl: payload.imageUrl,
            description: payload.description,
            date: payload.date,
            id: '12837691283',
         };
         commit('createMeetup', meetup);
      }
   },
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