import { sidebarLabels } from './sidebar/sidebarLabels.js'
import { removeAllChild } from '../utils/helpers.js'
import { getLoggedUser } from '../utils/storage.js'
import MainMenu from './menus/main/MainMenu.js'
import { sidebar } from './sidebar/sidebar.js'
import MyHTML from '../utils/MyHTML.js'
import * as DOM from '../utils/dom.js'

class Dashboard extends MyHTML {
  constructor() {
    const id = 'dashboard'
    const mainMenu = new MainMenu().string
    const content = [sidebar, mainMenu]

    super({ id: id, inner: content })
  }

  render() {
    removeAllChild(DOM.root)
    DOM.root.append(this.html)
    this.manager()
  }

  manager() {
    const mainMenu = new MainMenu()
    mainMenu.manager()

    this.sidebarButtons() 
    this.currentDate()
    this.showName()
  }

  sidebarButtons() {
    const buttons = DOM.getAll('.sidebar a')
    buttons.forEach((button, i) => 
      button.onclick = () => {
        this.changeMenu(i)
        this.currentDate() 
      })
  }

  currentDate() {
    const today = new Date().toISOString().split('T')[0]
    const date = DOM.get('header input[type="date"]')
    date.value = today
  }
  
  showName() {
    const name = getLoggedUser().fullname || ''
    const firstName = name.substring(0, name.indexOf(' '))
    const nameTxt = DOM.get('#accountName')
    nameTxt.innerText = 'Hello ' + firstName
  }

  changeMenu(i) {
   if (sidebarLabels[i].menu === 'logout') {
      location.reload()
      delete localStorage.loggedUser
    }

    const dashboard = DOM.get('#dashboard')
    const lastMenu = DOM.get('#dashboard main')
    const currentMenu = sidebarLabels[i].menu

    lastMenu.remove()
    dashboard.append(currentMenu.html)
    currentMenu.manager()
  }
}

export default Dashboard
