import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {},
  },
  getters: {
    getCity(state) {
      return state.city;
    },
  },
  mutations: {
    updateCity(state, city) {
      state.city = city;
    },
  },
  actions: {
    updateCity({ commit }, payload) {
      commit("updateCity", payload);
    },
  },
  modules: {},
});
