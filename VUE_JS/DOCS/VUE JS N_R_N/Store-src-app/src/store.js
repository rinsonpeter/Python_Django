import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  numbers: [1, 2, 3],
  name: "Tom",
  firstName: "John"
};

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload);
  },
  CHANGE_NAME(state,payload){
    state.name=payload;
  }
};

const actions = {
  addNumber(context, number) {
    context.commit("ADD_NUMBER", number);
  },
  changeName(context, newName) {
    context.commit("CHANGE_NAME", newName)
  }
};

const getters = {
  getNumbers(state) {
    return state.numbers;
  },
  getName(state){
    return state.name;
  },
  getFirstName(state) {
    return state.firstName;

  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
