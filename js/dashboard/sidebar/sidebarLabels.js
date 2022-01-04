import TransactionMenu from '../menus/transaction/TransactionMenu.js'
import HistoryMenu from '../menus/history/HistoryMenu.js'
import AddUserMenu from '../menus/addUser/AddUserMenu.js'
import BudgetMenu from '../menus/budget/BudgetMenu.js'
import SettingsMenu from '../menus/SettingsMenu.js'
import UsersMenu from '../menus/users/UsersMenu.js'
import MainMenu from '../menus/main/MainMenu.js'

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
    text: 'History',
    icon: 'fas fa-search-dollar',
    menu: new HistoryMenu()
  },
  {
    id: 'accountsLink',
    text: 'All Users',
    icon: 'fas fa-users',
    menu: new UsersMenu()
  },
  {
    text: 'Add User',
    icon: 'fas fa-user-plus',
    menu: new AddUserMenu(),
  },

  {
    text: 'Logout',
    icon: 'fas fa-sign-out-alt',
    menu: 'logout'
  }
]

export { sidebarLabels }
