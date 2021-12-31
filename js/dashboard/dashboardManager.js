import { searchAccount } from './menus/accounts/searchAccount.js'
import { historyFilter } from './menus/history/historyFilter.js'
import { currentDate, showName } from '../utils/helpers.js'
import { sidebarMenus } from './sidebar/sidebarMenus.js'
import { seeAll } from './menus/main/seeAll.js'
import * as DOM from '../utils/dom.js'
import { scheduleManager } from './menus/schedule/manager.js'
import { getChart } from './menus/chart/manager.js'

const changeMenus = i => { 
  sidebarMenus(i)

  if (DOM.get('#mainMenu'))
    seeAll()
  else if (DOM.get('#accountsMenu')) 
    searchAccount()
  else if (DOM.get('#historyMenu')) 
    historyFilter()
  else if (DOM.get('#scheduleMenu')) 
    scheduleManager()
  else if (DOM.get('#chartMenu'))
    getChart()
}

const sidebarButtons = () => {
  const buttons = DOM.getAll('.sidebar a')
  buttons.forEach((button, i) => 
    button.addEventListener('click', () => changeMenus(i)))
}

const dashboardManager = () => {
  sidebarButtons() 
  currentDate()
  showName()
  seeAll()
}

export { dashboardManager }
