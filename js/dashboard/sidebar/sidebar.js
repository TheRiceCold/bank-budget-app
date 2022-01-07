import { logoutAdmin } from '../../storage/adminStorage.js'
import { sidebarMenus } from './sidebarMenus.js'
import MyHTML from '../../utils/MyHTML.js'
import * as DOM from '../../utils/dom.js'
import { content } from './content.js'

class Sidebar extends MyHTML {
  constructor() {
    super({ tag: 'aside', inner: content })
  }

  manager() {
    const buttons = DOM.getAll('.sidebar a')
    buttons.forEach((button, i) => 
      button.onclick = () => {
        this.changeMenu(i)
        this.setCurrentDate() 
      })
  }

  changeMenu(i) {
    if (sidebarMenus[i].menu === 'logout') {
      logoutAdmin()
      return
    }

    const dashboard = DOM.get('#dashboard')
    const lastMenu = DOM.get('#dashboard main')
    const currentMenu = sidebarMenus[i].menu

    lastMenu.remove()
    dashboard.append(currentMenu.html)
    currentMenu.manager()
  }

  setCurrentDate() {
    const today = new Date().toISOString().split('T')[0]
    const date = DOM.get('header input[type="date"]')
    date.value = today
  }
}

export default Sidebar
