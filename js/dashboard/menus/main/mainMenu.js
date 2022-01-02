import MyHTML from '../../../utils/MyHTML.js'
import MenuHTML from '../../html/MenuHTML.js'
import { insights } from './insights.js'

const newUsersTable = new MyHTML({
  id: 'newAccounts',
  inner: '<h2>New Registered Users</h2>'
}).string


const content = {
  id: 'mainMenu',
  title: 'Dashboard',
  inner: [insights, newUsersTable]
}

const mainMenu = new MenuHTML(content)
export { mainMenu }
