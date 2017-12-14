import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      id: '',
      slug: '',
      gender: '',
      email: '',
      employers: [],
      education: [],
      online: false
    }
  },
  mutations: {},
  actions: {},
  getters: {}
})
