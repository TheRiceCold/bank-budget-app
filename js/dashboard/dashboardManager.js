import { menus } from './menus/menuList.js'
import * as dom from '../utils/dom.js'
import { accountsManager } from './menus/accounts/manager.js'

const changeMenu = i => {
  if (menus[i] === 'logout') {
    location.reload()
    localStorage.removeItem('isLoggedIn')
    return 
  }

  const main = dom.get('.container')
  const lastMenu = dom.get('.container main')
  const currentMenu = menus[i].html

  lastMenu.remove()
  main.append(currentMenu)

  if (dom.get('#accountsMenu')) 
    accountsManager()
}

const dashboardManager = () => {
  const sidebarMenus = dom.getAll('.sidebar a')
  sidebarMenus.forEach((menu, i) => 
    menu.addEventListener('click', () => changeMenu(i)))
}

export { dashboardManager }
