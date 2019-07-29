import {saveToken, destroyToken, haveToken} from './localstorage'
import VueRouter from 'vue-router';

const USER_EMAIL = 'admin@example.com'
const USER_PASSWORD = 'admin'
const LOGIN_URL = '/'
const PANEL_URL = '/panel'
const LOGOUT_URL = '/logout'

/**
 * Simple generate a little simple token to tests.
 * @param {Number} length 
 */
function generate_token(length){
  //edit the token allowed characters
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];  
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

/**
 * Verbose way to check needAuth
 * @param {VueRouter.Router} toRoute 
 */
const routeNeededAuth = (toRoute) => toRoute.meta.needAuth || false

const routeIsEqualToLogin = (toRoute) => toRoute.path === LOGIN_URL

/**
 * When you need to navigate about routes, you needed to check if user is logged in
 * this function provides somes verifications for know about your user session truly
 * he is called every route is pushed.
 * @param {VueRouter.Router} to 
 * @param {VueRouter.Router} from 
 * @param {CallableFunction} next 
 * @param {Auth} context 
 */
const authMiddleware = (to, from, next, context) => {
  if (to.path === LOGOUT_URL) {
    context.logoutUser()
    return next(LOGIN_URL)
  }

  if (routeNeededAuth(to) && context.isAuthenticated()) {
    return next()
  }

  if (context.isAuthenticated() && routeIsEqualToLogin(to)) {
    return next(PANEL_URL)
  }

  if (!routeNeededAuth(to)) {
    return next()
  }

  return next(LOGOUT_URL)
}

/**
 * This classe capsule everything about session, login, users, is about authentication, not authorization,
 * please feel free to change and add you auth logic's, he not called any endpoint o anything, simple compare
 * const above with provided credentials
 */
class Auth {
  /**
   * 
   * @param {VueRouter} Router 
   */
  constructor(router) {
    this.router = router
    this.router.beforeEach((to, from, next) => authMiddleware(to, from, next, this))
  }

  /**
   * Try login by email and password
   * @param {String} email 
   * @param {String} password 
   */
  loginwithEmailAndPassword (email, password) {
    //implement your logic here
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === USER_EMAIL && password === USER_PASSWORD) {
          saveToken(generate_token(142))
          resolve(true)
        }
        reject(false)
      }, 900)
    })
  }

  /**
   * Destroy logged user session
   */
  logoutUser () {
    //Implement your logic here
    destroyToken()
  }

  /**
   * Check if user is auth
   */
  isAuthenticated () {
    // Implement your logic here
    return haveToken()
  }

  redirectToHomeOrCalledUrl () {
    this.router.push(PANEL_URL)
  }

  /**
   * Singleton for only one instance
   * @param {VueRouter} router 
   * @returns {Auth}
   */
  static getInstance (router) {
    if (!this.instance) {
      this.instance = new Auth(router)
    }
    return this.instance
  }

}

/**
 * @returns {Auth}
 */
export default (router = null) => Auth.getInstance(router)
