import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import cust from '@/assets/customer-specifics'
// import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    sidebarShow: false,
    pkg,
    cust
  },
  mutations: {
    showSidebar (state, show) {
      state.sidebarShow = show
    },
    toggleSidebar (state) {
      state.sidebarShow = !state.sidebarShow
    }
  },
  actions: {
    showSidebar ({commit}) {
      commit('showSidebar')
    }
  }
})

export default store
