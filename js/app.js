import { dashboardManager } from './dashboard/dashboardManager.js'
import { homeManager } from './home/homeManager.js'
import { dashboard } from './dashboard/dashboard.js'
import { home } from './home/homePage.js'
import { root } from './utils/dom.js'

if (!localStorage.isLoggedIn) {
  root.append(home)
  homeManager()
} else {
  root.append(dashboard)
  dashboardManager()
}
