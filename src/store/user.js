import firebase from 'firebase'
require('../../node_modules/@firebase/firestore')

const state = {}

const mutations = {}
const actions = {
  signUp ({commit}, payload) {
    let testeFirebase = firebase.firestore()
    console.log(testeFirebase)
    console.log(payload)
    console.log(commit)
}
}
const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}