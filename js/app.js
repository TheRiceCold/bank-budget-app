import { isUserLoggedIn } from './storage/adminStorage.js'
import Dashboard from './dashboard/Dashboard.js'
import Home from './home/Home.js'

if (isUserLoggedIn) {
  const dashboard = new Dashboard()
  dashboard.render()
} else {
  const home = new Home()
  home.render()
}
