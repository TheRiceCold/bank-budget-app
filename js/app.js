import { dashboardManager } from './dashboard/dashboardManager.js'
import { homeManager } from './home/homeManager.js'
import { dashboard } from './dashboard/dashboard.js'
import { home } from './home/homePage.js'
import { root } from './utils/dom.js'

const loggedAccount = JSON.parse(localStorage.loggedAccount)

if (Object.keys(loggedAccount).length === 0) {
  root.append(home)
  homeManager()
} else {
  root.append(dashboard)
  dashboardManager()
}
