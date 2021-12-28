import Menu from './menuList.js'
import * as dom from '../../utils/dom.js'
import { accountsManager } from '../menus/accounts/manager.js'

const changeMenu = (e, index) => {
  if (Menu[index] === 'logout') {
    location.reload()
    localStorage.removeItem('isLoggedIn')
    return 
  }

  const main = dom.get('.container')
  const lastMenu = dom.get('.container main')
  const currentMenu = Menu[index].html

  lastMenu.remove()
  main.append(currentMenu)

  if (dom.get('#accountsMenu')) 
    accountsManager()
}

export const dashboardManager = () => {
  const sidebarMenus = dom.getAll('.sidebar a')
  sidebarMenus.forEach((menu, i) => 
    menu.addEventListener('click', e => changeMenu(e, i)))
}
