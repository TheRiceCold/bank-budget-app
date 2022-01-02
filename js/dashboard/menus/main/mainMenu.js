import { usersToDisplay } from '../../extras/usersToDisplay.js'
import { getStoredAccounts } from '../../../utils/storage.js'
import { jsonToTable } from '../../extras/jsonToTable.js'
import MyHTML from '../../../utils/MyHTML.js'
import MenuHTML from '../../html/MenuHTML.js'
import { insights } from './insights.js'

const list = usersToDisplay(getStoredAccounts()).reverse()
list.length = 5
const table = jsonToTable(list).outerHTML

const newUsersTable = new MyHTML({
  id: 'newAccounts',
  inner: [
    '<h2>New registered accounts</h2>',
    table, '<a>See all</a>'
  ]
}).string

const content = {
  id: 'mainMenu',
  title: 'Dashboard',
  inner: [insights, newUsersTable]
}

const mainMenu = new MenuHTML(content)
export { mainMenu }
