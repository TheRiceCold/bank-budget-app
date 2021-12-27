import { root } from './utils/dom.js'
import { home } from './login/loginPage.js'
import { dashboard } from './dashboard/dashboard.js'
import { loginManager } from './login/manager/LoginManager.js'

let isLogin = localStorage.isLogin 
  ? dashboard : home

root.append(isLogin)
loginManager()
