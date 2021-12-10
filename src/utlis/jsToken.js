import Cookies from 'js-cookie'

const TOKENKEY = 'Admin-Token'
const CheckUserIdKey = 'CheckUserIdKey'
export function getToken() {
  return Cookies.get(TOKENKEY)
}

export function setToken(token) {
  return Cookies.set(TOKENKEY, token)
}

export function removeToken() {
  return Cookies.remove(TOKENKEY)
}

export function setCheckUserId(checkUserId) {
  return Cookies.set(CheckUserIdKey, checkUserId)
}

export function getCheckUserId(checkUserId) {
  return Cookies.set(CheckUserIdKey)
}

export function removeCheckUserId() {
  return Cookies.set(CheckUserIdKey)
}
