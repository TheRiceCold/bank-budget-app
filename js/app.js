import { dashboardManager } from './dashboard/dashboardManager.js'
import { dashboard } from './dashboard/dashboard.js'
import { homeManager } from './home/homeManager.js'
import { isLoggedIn } from './utils/storage.js'
import { home } from './home/homePage.js'
import { root } from './utils/dom.js'

if (isLoggedIn) {
  root.append(dashboard)
  dashboardManager()
} else {
  root.append(home)
  homeManager()
}
