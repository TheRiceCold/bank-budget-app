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
  logout(i)

  const dashboard = DOM.get('#dashboard')
  const lastMenu = DOM.get('#dashboard main')
  const currentMenu = sidebarLabels[i].menu

  lastMenu.remove()
  dashboard.append(currentMenu)
}

export { sidebarMenus }
