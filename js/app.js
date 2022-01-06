import { isAccountLoggedIn } from './storage/accountStorage.js'
import { isAdminLoggedIn } from './storage/adminStorage.js'
import Dashboard from './dashboard/Dashboard.js'
import BudgetApp from './budgetApp/BudgetApp.js'
import Home from './home/Home.js'

if (isAdminLoggedIn) {
  const dashboard = new Dashboard()
  dashboard.render()
} 
else if (isAccountLoggedIn) {
  const budgetApp = new BudgetApp()
  budgetApp.render()
}
else {
  const home = new Home()
  home.render()
}
