import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    numberResult: [1, 10, 100, 200],
  },
  getters:{
    allUsers: (state) => {
      return state.users
    },
  },
  mutations:{
    SET_USERS(state, users) {
        state.users = users
    },

    SET_USER(state, user) {
      state.users = user
  },
  },
  actions:{
    getUsers({commit}) {
      axios.get('https://randomuser.me/api/?results=100')
          .then(response => {
          commit('SET_USERS', response.data.results)
          // console.log(response.data.results);
      })
    },

    getUserByResult({commit}, number) {
      axios.get(`https://randomuser.me/api/?results=${number}`)
          .then(response => {
              commit('SET_USER', response.data.results)
              console.log(response.data.results)
              // console.log(this.state.search)
            })
        }
    }
})
