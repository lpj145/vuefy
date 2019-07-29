
const TOKEN_NAME = 'token_test'

/**
 * 
 * @param {String} token 
 */
export const saveToken = (token) => {
  window.localStorage.setItem(TOKEN_NAME, token)
}

export const destroyToken = () => {
  window.localStorage.removeItem(TOKEN_NAME)
}

export const haveToken = () => {
  return window.localStorage.getItem(TOKEN_NAME) !== null
}