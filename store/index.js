import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    visibleHeader: false,
    visibleAffix: false
  },
  mutations: {
    toggle (state, key) {
      state[key] = !state[key]
    }
  },
  actions: {
    nuxtServerInit ({ state }, { req }) {
      if (!process.BROWSER) {
        state.guideMenu = require('json-loader!static/docs/guide/menu.json')
        state.apiMenu = require('json-loader!static/docs/api/menu.json')
        state.examplesMenu = require('json-loader!static/docs/examples/menu.json')
      }
    }
  }
})

export default store
