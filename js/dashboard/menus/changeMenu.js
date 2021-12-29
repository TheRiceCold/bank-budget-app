import { searchAccount } from './accounts/searchAccount.js'
import { seeAll } from './main/seeAll.js'
import * as DOM from '../../utils/dom.js'
import { menus } from './menuList.js'

const changeMenu = i => {
  if (menus[i] === 'logout') {
    location.reload()
    delete localStorage.loggedAccount
    return 
  }

  const main = DOM.get('.container')
  const lastMenu = DOM.get('.container main')
  const currentMenu = menus[i].html

  lastMenu.remove()
  main.append(currentMenu)

  let today = new Date().toISOString().split('T')[0]
  const date = DOM.get('header input[type="date"]')
  date.value = today

  if (DOM.get('#mainMenu'))
    seeAll()
  else if (DOM.get('#accountsMenu')) 
    searchAccount()
}

export { changeMenu }
