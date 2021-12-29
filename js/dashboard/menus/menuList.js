import { mainMenu } from './main/mainMenu.js'
import { chartMenu } from './chart/chartMenu.js'
import { budgetMenu } from './budget/budgetMenu.js'
import { depositMenu } from './deposit/depositMenu.js'
import { accountsMenu } from './accounts/accountsMenu.js'
import { transferMenu } from './transfer/transferMenu.js'
import { withdrawMenu } from './withdraw/withdrawMenu.js'

const menus = [
  mainMenu,
  accountsMenu,
  depositMenu,
  withdrawMenu,
  transferMenu,
  budgetMenu,
  chartMenu,
  'settings',
  'logout'
]

export { menus }
