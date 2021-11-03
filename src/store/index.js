import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    numberResult: [1, 10, 100, 200],
    genreResult: ['male', 'female'],
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
              commit('SET_USERS', response.data.results)
              console.log(response.data.results)
              // console.log(this.state.search)
            })
        },

      getUserByGenre({commit}, genre) {
        axios.get(`https://randomuser.me/api/?gender=${genre}&results=100`)
            .then(response => {
                commit('SET_USERS', response.data.results)
                console.log(response.data.results)
                // console.log(this.state.search)
              })
          }
    }
})
