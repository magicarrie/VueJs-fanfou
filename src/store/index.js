import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  count: localStorage.getItem('count') || 0
};

const mutations = {
  increment () {
    state.count++;
  },
  decrement () {
    state.count--;
  }
};

const actions = {
  increment: ({ commit }) => {
    commit('increment');
    localStorage.setItem('count', state.count);
  },
  decrement: ({ commit }) => {
    commit('decrement');
    localStorage.setItem('count', state.count);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
  // getters
});
