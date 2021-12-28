import { root } from './utils/dom.js'
import { home } from './login/loginPage.js'
import { dashboard } from './dashboard/dashboard.js'
import { homeManager } from './login/manager/manager.js'
import { dashboardManager } from './dashboard/manager/manager.js'

if (!localStorage.isLoggedIn) {
  root.append(home)
  homeManager()
} else {
  root.append(dashboard)
  dashboardManager()
}
