import { withdrawMenu } from '../menus/withdraw/withdrawMenu.js'
import { transferMenu } from '../menus/transfer/transferMenu.js'
import { settingsMenu } from '../menus/settings/settingsMenu.js'
import { accountsMenu } from '../menus/accounts/accountsMenu.js'
import { depositMenu } from '../menus/deposit/depositMenu.js'
import { budgetMenu } from '../menus/budget/budgetMenu.js'
import { chartMenu } from '../menus/chart/chartMenu.js'
import { mainMenu } from '../menus/main/mainMenu.js'

const sidebarLabels = [
  {
    text: 'Dashboard',
    icon: 'th-large',
    menu: mainMenu.html
  },
  {
    text: 'Deposit',
    icon: 'piggy-bank',
    menu: depositMenu.html
  },
  {
    text: 'Withdraw',
    icon: 'money-check',
    menu: withdrawMenu.html
  },
  {
    text: 'Transfer',
    icon: 'coins',
    menu: transferMenu.html
  },
  {
    text: 'Budget',
    icon: 'wallet',
    menu: budgetMenu.html
  },
  {
    id: 'accountsLink',
    text: 'Accounts',
    icon: 'users',
    menu: accountsMenu.html
  },
  {
    text: 'Chart',
    icon: 'chart-bar',
    menu: chartMenu.html
  },
  {
    text: 'Setting',
    icon: 'user-cog',
    menu: settingsMenu.html
  },
  {
    text: 'Logout',
    icon: 'sign-out-alt',
    menu: 'logout'
  }
]

export { sidebarLabels }
