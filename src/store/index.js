import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {},
    selectedForecast: null,
  },
  getters: {
    getSelectedForecast(state) {
      return state.selectedForecast;
    },
    getCity(state) {
      return state.city;
    },
  },
  mutations: {
    updateSelectedForecast(state, selectedForecast) {
      state.selectedForecast = selectedForecast;
    },
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
    updateSelectedForecast({ commit }, payload) {
      commit("updateSelectedForecast", payload);
    },
  },
  modules: {},
});
