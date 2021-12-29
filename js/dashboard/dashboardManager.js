import { searchAccount } from './menus/accounts/searchAccount.js'
import { sidebarMenus } from './sidebar/sidebarMenus.js'
import { currentDate } from '../utils/helpers.js'
import { seeAll } from './menus/main/seeAll.js'
import * as DOM from '../utils/dom.js'

const changeMenus = i => { 
  sidebarMenus(i)
  if (DOM.get('#mainMenu'))
    seeAll()
  else if (DOM.get('#accountsMenu')) 
    searchAccount()
}

const dashboardManager = () => {
  const sidebarButtons = DOM.getAll('.sidebar a')
  for (let i = 0; i < sidebarButtons.length; i++) {
    const button = sidebarButtons[i]
    button.addEventListener('click', () => changeMenus(i))
  }
  currentDate()
}

export { dashboardManager }
