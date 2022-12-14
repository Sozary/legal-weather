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
      var lastTimestamp = city.list[0].dt;
      city.list = city.list.reduce(
        (list, listItem) => {
          if (listItem.dt >= lastTimestamp + 90000) {
            list.push(listItem);
            lastTimestamp = listItem.dt;
          }
          return list;
        },
        [city.list[0]]
      );
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
