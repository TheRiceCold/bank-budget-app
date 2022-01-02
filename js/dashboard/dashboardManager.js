import { mainManager } from './menus/main/mainManager.js'
import { menuManager } from './menus/menuManager.js'
import { loggedAccount } from '../utils/storage.js'
import * as DOM from '../utils/dom.js'

const sidebarButtons = () => {
  const buttons = DOM.getAll('.sidebar a')
  buttons.forEach((button, i) => 
    button.addEventListener('click', () => menuManager(i)))
}

const currentDate = () => {
  let today = new Date().toISOString().split('T')[0]
  const date = DOM.get('header input[type="date"]')
  date.value = today
}

const showName = () => {
  const name = loggedAccount.fullname || ''
  const firstName = name.substring(0, name.indexOf(' '))

  const nameTxt = DOM.get('#accountName')
  nameTxt.innerText = 'Hello ' + firstName
}

const dashboardManager = () => {
  sidebarButtons() 
  mainManager()
  currentDate()
  showName()
}

export { dashboardManager }
