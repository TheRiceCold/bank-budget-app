import { transactionManager } from './menus/transaction/manager.js'
import { displayHistory } from './menus/history/displayHistory.js'
import { searchAccount } from './menus/accounts/searchAccount.js'
import { scheduleManager } from './menus/schedule/manager.js'
import { budgetManager } from './menus/budget/manager.js'
import { sidebarMenus } from './sidebar/sidebarMenus.js'
import { mainManager } from './menus/main/manager.js'
import { getChart } from './menus/chart/manager.js'
import * as DOM from '../utils/dom.js'

const changeMenus = i => { 
  sidebarMenus(i)

  if (DOM.get('#mainMenu'))
    mainManager()
  else if (DOM.get('#transactionMenu'))
    transactionManager()
  else if (DOM.get('#budgetMenu'))
    budgetManager()
  else if (DOM.get('#historyMenu')) 
    displayHistory()
  else if (DOM.get('#scheduleMenu')) 
    scheduleManager()
  else if (DOM.get('#chartMenu'))
    getChart()
  else if (DOM.get('#accountsMenu')) 
    searchAccount()
}

export { changeMenus }
