import { transactionManager } from './transaction/transactionManager.js'
import { historyManager } from './history/historyManager.js'
import { searchAccount } from './accounts/searchAccount.js'
import { sidebarMenus } from '../sidebar/sidebarMenus.js'
import { scheduleManager } from './schedule/manager.js'
import { budgetManager } from './budget/manager.js'
import { mainManager } from './main/mainManager.js'
import { getChart } from './chart/manager.js'
import * as DOM from '../../utils/dom.js'

const menuManager = i => { 
  sidebarMenus(i)

  if (DOM.get('#mainMenu'))
    mainManager()
  else if (DOM.get('#transactionMenu'))
    transactionManager()
  else if (DOM.get('#budgetMenu'))
    budgetManager()
  else if (DOM.get('#historyMenu')) 
    historyManager()
  else if (DOM.get('#scheduleMenu')) 
    scheduleManager()
  else if (DOM.get('#chartMenu'))
    getChart()
  else if (DOM.get('#accountsMenu')) 
    searchAccount()
}

export { menuManager }
