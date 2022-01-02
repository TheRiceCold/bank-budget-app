import Dashboard from './dashboard/Dashboard.js'
import { isLoggedIn } from './utils/storage.js'
import Home from './home/Home.js'

if (isLoggedIn) {
  const dashboard = new Dashboard()
  dashboard.render()
} else {
  const home = new Home()
  home.render()
}
