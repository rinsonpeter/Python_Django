import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn:'Anonymous',
  },
  mutations: {
    ADD_NAME (state, payload) {
      console.log("paylord*********",payload)
      state.loggedIn=payload
    }
  },
  actions: {
    checkLogin (context, email) {
      context.commit('ADD_NAME', email)
    }
  },
  modules: {
    
  },
  getters: {
    getNames (state) {
      return state.loggedIn
    }
  }
})
