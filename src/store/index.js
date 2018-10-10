import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import messageList from './modules/messageList'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    messageList,
  },
  getters
})
export default store
