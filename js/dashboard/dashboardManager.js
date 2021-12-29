import { changeMenu } from './menus/changeMenu.js'
import { seeAll } from './menus/main/seeAll.js'
import * as DOM from '../utils/dom.js'

const dashboardManager = () => {
  let today = new Date().toISOString().split('T')[0]
  const date = DOM.get('header input[type="date"]')
  date.value = today

  const sidebarMenus = DOM.getAll('.sidebar a')
  sidebarMenus.forEach((menu, i) => 
    menu.addEventListener('click', () => changeMenu(i)))
  seeAll()
}

export { dashboardManager }
