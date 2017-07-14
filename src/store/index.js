/**
 * Created by chenmf on 2017/6/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'
import noteStorage from '../api/storage'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  show: 'all',
  notes: [],
  activeNote: {}
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

store.watch(
  (state) => state.notes,
  (val) => val ? noteStorage.set(val) : noteStorage.set([]),
  { deep: true }
)

export default store
