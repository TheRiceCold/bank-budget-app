import { accountList } from '../../manager/accountList.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import MenuHTML from '../../html/MenuHTML.js'

const content = {
  id: 'accountsMenu', 
  title: 'Accounts', 
  inner: [
    `<input type="text" id="searchInput" placeholder="Search"/>`,
    jsonTable(accountList).outerHTML
  ]
}

const AccountMenu = new MenuHTML(content)
export default AccountMenu
