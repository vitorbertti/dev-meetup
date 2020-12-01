import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      loadedMeetups: [
         {imageUrl: '', id: '12312435345', title: 'Meetup in New York', date: new Date(), location: 'New York', description: 'New York'},
         {imageUrl: '', id: '23423444343', title: 'Meetup in Paris', date: new Date(), location: 'Paris', description: 'Its Paris'},
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
      setUser(state, payload) {
         state.user = payload;
      }
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
      },
      signUserUp({ commit }, payload) {
         firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
            const newUser = {
               id: user.uid,
               registeredMeetups: [],
            }
            commit('setUser', newUser);
         }).catch(error => {
            console.log(error);
         })
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