import firebase from 'firebase'
import { db } from '../firebase'

const state = {
  user: null,
  userIsLoggedIn: null,
  code: '',
  message: '',
  token:  localStorage.getItem('user-token') || ''
}

const mutations = {
  setUser (state, usuario) {
    state.user = usuario
  },
  setUserIsloggedIn (state, status) {
    state.userIsLoggedIn = status
  },
  setErrorLogin (state, error) {
    state.code = error.code
    state.message = error.message
  }
}
const actions = {
  login ({ commit }, payload) {
    const { email, password } = payload
    return new Promise((resolve,reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          // console.log(user)
          commit('setUserIsloggedIn', user.user.emailVerified)
          localStorage.setItem('user-token', user.user.refreshToken)
          resolve(user)
        }
        else reject(user)
      })
      .catch((error) =>  {
          commit('setErrorLogin', error)
      })
    })
  }, 
  signUp ({commit}, payload) {
    const { email, password } = payload
    return new Promise((resolve,reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)  
      .then(user => {
        if (user) {
          firebase.auth().currentUser.sendEmailVerification()
          .then(function () {
            const id = user.user.uid
            const usuario = {
             email: user.user.email,
             emailVerified: user.user.emailVerified,
             date: new Date(),
            }
            // persistindo dados na collection
            db.collection('users').doc(id).set(usuario)
              .then(() => commit('setUser', usuario))
              .catch(err => console.log(err))
          })
          resolve(user)
        }
        else reject(user)
      })
    })
    
  }
}
const getters = {
  user: state => state.user,
  isLoggedIn: state => state.userIsLoggedIn,
  code: state => state.code,
  message: state => state.message,
  token: state => !!state.token
}

export default {
  state,
  mutations,
  actions,
  getters,
}