import { historyManager } from './menus/history/historyManager.js'
import { scheduleManager } from './menus/schedule/manager.js'
import { budgetManager } from './menus/budget/manager.js'
import { sidebarMenus } from './sidebar/sidebarMenus.js'
import { getLoggedAccount } from '../utils/storage.js'
import { removeAllChild } from '../utils/helpers.js'
import { getChart } from './menus/chart/manager.js'
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
        sidebarMenus(i)
        this.currentDate() 
      })
  }

  currentDate() {
    const today = new Date().toISOString().split('T')[0]
    const date = DOM.get('header input[type="date"]')
    date.value = today
  }
  
  showName() {
    const name = getLoggedAccount().fullname || ''
    const firstName = name.substring(0, name.indexOf(' '))
    const nameTxt = DOM.get('#accountName')
    nameTxt.innerText = 'Hello ' + firstName
  }

  menuManager(index) { 
    //sidebarMenus(index)

    //if (DOM.get('#budgetMenu'))
      //budgetManager()
    //else if (DOM.get('#historyMenu')) 
      //historyManager()
    //else if (DOM.get('#scheduleMenu')) 
      //scheduleManager()
    //else if (DOM.get('#chartMenu'))
      //getChart()
  }
}

export default Dashboard
