import { jsonTable } from '../../utils/jsonTable.js'
import MenuHTML from '../html/MenuHTML.js'
import { accountList } from '../manager/accountList.js'

const content = {
  id: 'accountsMenu', 
  title: 'Accounts', 
  inner: [
    `Search: <input type="text" id="searchInput"/>`,
    jsonTable(accountList).outerHTML
  ]
}

const AccountMenu = new MenuHTML(content)
export default AccountMenu
