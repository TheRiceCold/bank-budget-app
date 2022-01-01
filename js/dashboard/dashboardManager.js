import { currentDate, showName } from '../utils/helpers.js'
import { seeAll } from './menus/main/seeAll.js'
import { changeMenus } from './changeMenus.js'
import * as DOM from '../utils/dom.js'

const sidebarButtons = () => {
  const buttons = DOM.getAll('.sidebar a')
  buttons.forEach((button, i) => 
    button.addEventListener('click', () => changeMenus(i)))
}

const dashboardManager = () => {
  sidebarButtons() 
  currentDate()
  showName()
  seeAll()
}

export { dashboardManager }
