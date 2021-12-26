import { jsonToTable } from '../../utils/helpers.js'
import MenuHTML from '../manager/MenuHTML.js'
import { accountList } from '../manager/accountList.js'

const content = {
  id: 'accountsMenu', 
  title: 'Accounts', 
  inner: [
    `Search: <input type="text" id="searchInput"/>`,
    jsonToTable(accountList).outerHTML
  ]
}

const AccountMenu = new MenuHTML(content)
export default AccountMenu
