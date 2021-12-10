// axios封装
import axios from 'axios'
import { Toast } from 'vant'
import { getToken } from './jsToken'
import URL from './websiteUrl'

// 赋值网站根本路径
axios.defaults.baseURL = URL.BASEURL

// 请求超时时间
axios.defaults.timeout = 30000

// post请求头
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=utf-8;text/html;charset=utf8'
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (getToken() && !isToken) {
      config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.url == '/login/wechatLogin' || config.url == '/system/wechatuser/wechat/getSignature') {
      config.headers['Authorization'] = ''
    }
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    const code = response.data.code || 200
    const msg = response.data.msg || '请求失败'
    if (code === 200) {
      return Promise.resolve(response)
    } else if (code === 401) {
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${global.appid}&redirect_uri=${global.redirectURL}&response_type=code&scope=snsapi_userinfo`
    } else {
      Toast.fail(msg)
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    let { message } = error
    if (message == 'Network Error') {
      message = '请求异常，请检查网络是否正常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时，请重新再试'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    Toast.fail(message)
    return Promise.reject(error.response)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}, head = null) {
  return new Promise((resolve, reject) => {
    axios.get(url,
      { params: params }
    )
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data, headers)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function del(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

