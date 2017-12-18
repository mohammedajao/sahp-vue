// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import VueFire from 'vuefire'
import { sync } from 'vuex-router-sync'
import { store } from '@/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueFire)
Vue.use(BootstrapVue)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created: function () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDwTuRlIo_O7XdultgKaxMewJf3H58HTT0',
      authDomain: 'sahp-966bf.firebaseapp.com',
      databaseURL: 'https://sahp-966bf.firebaseio.com',
      projectId: 'sahp-966bf',
      storageBucket: 'sahp-966bf.appspot.com'
    })
    this.$store.dispatch('loadJobs')
    this.$store.dispatch('loadUsers')
  }
})
