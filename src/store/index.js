import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: {
      coord: { lon: 4.8, lat: 43.9493 },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 281.48,
        feels_like: 280.85,
        temp_min: 281.12,
        temp_max: 283.41,
        pressure: 1004,
        humidity: 96,
      },
      visibility: 10000,
      wind: { speed: 1.54, deg: 160 },
      clouds: { all: 100 },
      dt: 1671012911,
      sys: {
        type: 2,
        id: 2024181,
        country: "FR",
        sunrise: 1671001658,
        sunset: 1671033798,
      },
      timezone: 3600,
      id: 3035681,
      name: "Avignon",
      cod: 200,
    },
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
