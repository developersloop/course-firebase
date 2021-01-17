import store from '../store/index.js'
export default (to, from, next) => {
  if(store.getters.isLoggedIn) {
    next()
  }
    else next('/login')
}