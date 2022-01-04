import { adminLoggedIn } from './storage/control.js'
import Dashboard from './dashboard/Dashboard.js'
import Home from './home/Home.js'

if (adminLoggedIn) {
  const dashboard = new Dashboard()
  dashboard.render()
} else {
  const home = new Home()
  home.render()
}
