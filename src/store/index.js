import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {},
    refreshSearchList: false,
    cityImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/130928072317-01-copenhagen-restricted-horizontal-large-gallery.jpg",
    selectedForecast: null,
  },
  getters: {
    getSelectedForecast(state) {
      return state.selectedForecast;
    },
    getRefreshSearchList(state) {
      return state.refreshSearchList;
    },
    getCityImage(state) {
      return state.cityImage;
    },
    getCity(state) {
      return state.city;
    },
  },
  mutations: {
    updateSelectedForecast(state, selectedForecast) {
      state.selectedForecast = selectedForecast;
    },
    updateRefreshSearchList(state, refreshSearchList) {
      state.refreshSearchList = refreshSearchList;
    },
    updateCityImage(state, cityImage) {
      state.cityImage = cityImage;
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
    refreshSearchList({ commit }, payload) {
      commit("updateRefreshSearchList", payload);
    },

    updateCity({ commit }, payload) {
      commit("updateCity", payload);
    },
    updateCityImage({ commit }, payload) {
      commit("updateCityImage", payload);
    },
    updateSelectedForecast({ commit }, payload) {
      commit("updateSelectedForecast", payload);
    },
  },
  modules: {},
});
