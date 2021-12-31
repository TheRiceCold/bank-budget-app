import { currentDate, showName } from '../../utils/helpers.js'
import { sidebarLabels } from './sidebarLabels.js'
import * as DOM from '../../utils/dom.js'

const logout = i => {
  if (sidebarLabels[i].menu === 'logout') {
    location.reload()
    delete localStorage.loggedAccount
    return 
  }
}

const sidebarMenus = i => {
  showName()
  logout(i)

  const main = DOM.get('#dashboard')
  const lastMenu = DOM.get('#dashboard main')
  const currentMenu = sidebarLabels[i].menu

  lastMenu.remove()
  main.append(currentMenu)

  currentDate()
}

export { sidebarMenus }
