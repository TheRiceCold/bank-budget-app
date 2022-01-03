import TransactionMenu from '../menus/transaction/TransactionMenu.js'
import { scheduleMenu } from '../menus/schedule/scheduleMenu.js'
import HistoryMenu from '../menus/history/HistoryMenu.js'
import { chartMenu } from '../menus/chart/chartMenu.js'
import BudgetMenu from '../menus/budget/BudgetMenu.js'
import SettingsMenu from '../menus/SettingsMenu.js'
import MainMenu from '../menus/main/MainMenu.js'
import UsersMenu from '../menus/UsersMenu.js'

const sidebarLabels = [
  {
    text: 'Dashboard',
    icon: 'fas fa-th-large',
    menu: new MainMenu()
  },
  {
    text: 'Transaction',
    icon: 'far fa-credit-card',
    menu: new TransactionMenu()
  },
  {
    text: 'Budget',
    icon: 'fas fa-wallet',
    menu: new BudgetMenu()
  },
  {
    text: 'Schedule',
    icon: 'fas fa-calendar-alt',
    menu: scheduleMenu.html
  },
  {
    text: 'History',
    icon: 'fas fa-search-dollar',
    menu: new HistoryMenu()
  },
  {
    text: 'Chart',
    icon: 'fas fa-chart-bar',
    menu: chartMenu.html
  },
  {
    id: 'accountsLink',
    text: 'Accounts',
    icon: 'fas fa-users',
    menu: new UsersMenu()
  },
  {
    text: 'Setting',
    icon: 'fas fa-user-cog',
    menu: new SettingsMenu()
  },
  {
    text: 'Logout',
    icon: 'fas fa-sign-out-alt',
    menu: 'logout'
  }
]

export { sidebarLabels }
