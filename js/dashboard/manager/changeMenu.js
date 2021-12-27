import Menu from './menuList.js'
import * as dom from '../../utils/dom.js'
import { tableToArray } from '../../utils/helpers.js'
import { searchTable } from '../../utils/searchTable.js'

const accountsMenu = () => {
  const table = dom.get('#accountsMenu table')
  const tableData = tableToArray(table)
  const searchInput = dom.get('#searchInput')

  searchInput.addEventListener('keyup', e => {
    const term = e.target.value
    searchTable(tableData, term)
  })
}

const changeMenu = (e, index) => {
  const main = dom.get('.container')
  const lastMenu = dom.get('.container main')
  const currentMenu = Menu[index].html

  lastMenu.remove()
  main.append(currentMenu)

  if (dom.get('#accountsMenu')) 
    accountsMenu()
}

export const sidebarEvents = () => {
  const sidebarMenus = dom.getAll('.sidebar a')
  sidebarMenus.forEach((menu, i) => 
    menu.addEventListener('click', e => changeMenu(e, i)))
}
