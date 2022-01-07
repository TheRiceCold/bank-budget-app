import TransactionMenu from '../menus/transaction/TransactionMenu.js'
import AccountListMenu from '../menus/accountList/AccountListMenu.js'
import NewAccountMenu from '../menus/newAccount/NewAccountMenu.js'
import { scheduleMenu } from '../menus/schedule/scheduleMenu.js'
import HistoryMenu from '../menus/history/HistoryMenu.js'
import SettingsMenu from '../menus/SettingsMenu.js'
import ChartMenu from '../menus/chart/ChartMenu.js'
import MainMenu from '../menus/main/MainMenu.js'

const sidebarMenus = [
    {
      text: 'Dashboard',
      icon: 'fas fa-th-large',
      menu: new MainMenu()
    },
    {
      text: 'New Account',
      icon: 'fas fa-user-plus',
      menu: new NewAccountMenu()
    },
    {
      text: 'New Transaction',
      icon: 'far fa-credit-card',
      menu: new TransactionMenu()
    },
    {
      text: 'Transaction History',
      icon: 'fas fa-search-dollar',
      menu: new HistoryMenu()
    },
    {
      id: 'accountsLink',
      text: 'Account Masterlist',
      icon: 'fas fa-users',
      menu: new AccountListMenu()
    },
    {
      text: 'Account Settings',
      icon: 'fas fa-user-cog',
      menu: new SettingsMenu()
    },

    {
      text: 'Reminders',
      icon: 'fas fa-calendar-alt',
      menu: scheduleMenu.html
    },
    {
      text: 'Daily Stats',
      icon: 'fas fa-chart-bar',
      menu: new ChartMenu()
    },
    {
      text: 'Logout',
      icon: 'fas fa-sign-out-alt',
      menu: 'logout'
    }
  ]

export { sidebarMenus }
