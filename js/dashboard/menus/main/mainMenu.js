import { newUsersTable } from './newUsersTable.js'
import MenuHTML from '../../html/MenuHTML.js'
import { insights } from './insights.js'

const content = {
  id: 'mainMenu',
  title: 'Dashboard',
  inner: [insights, newUsersTable]
}

const mainMenu = new MenuHTML(content)
export { mainMenu }
