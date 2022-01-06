import { getLoggedAdmin } from '../storage/adminStorage.js'
import { removeAllChild } from '../utils/helpers.js'
import MainMenu from './menus/main/MainMenu.js'
import Sidebar from './sidebar/sidebar.js'
import MyHTML from '../utils/MyHTML.js'
import * as DOM from '../utils/dom.js'

class Dashboard extends MyHTML {
  constructor() {
    const id = 'dashboard'
    const mainMenu = new MainMenu().string
    const sidebar = new Sidebar().string
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
    const sidebar = new Sidebar()
    sidebar.manager()

    this.setCurrentDate()
    this.showName()
  }

  showName() {
    const name = getLoggedAdmin().fullname || ''
    const firstName = name.substring(0, name.indexOf(' '))
    const nameTxt = DOM.get('#accountName')
    nameTxt.innerText = 'Hello ' + firstName
  }

  setCurrentDate() {
    const today = new Date().toISOString().split('T')[0]
    const date = DOM.get('header input[type="date"]')
    date.value = today
  }
}

export default Dashboard
