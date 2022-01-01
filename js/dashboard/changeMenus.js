import { addTransaction } from './menus/transaction/addTransaction.js'
import { searchAccount } from './menus/accounts/searchAccount.js'
import { historyFilter } from './menus/history/historyFilter.js'
import { scheduleManager } from './menus/schedule/manager.js'
import { budgetManager } from './menus/budget/manager.js'
import { sidebarMenus } from './sidebar/sidebarMenus.js'
import { getChart } from './menus/chart/manager.js'
import { seeAll } from './menus/main/seeAll.js'
import * as DOM from '../utils/dom.js'

const changeMenus = i => { 
  sidebarMenus(i)

  if (DOM.get('#mainMenu'))
    seeAll()
  else if (DOM.get('#transactionMenu'))
    addTransaction()
  else if (DOM.get('#budgetMenu'))
    budgetManager()
  else if (DOM.get('#historyMenu')) 
    historyFilter()
  else if (DOM.get('#scheduleMenu')) 
    scheduleManager()
  else if (DOM.get('#chartMenu'))
    getChart()
  else if (DOM.get('#accountsMenu')) 
    searchAccount()
}

export { changeMenus }
