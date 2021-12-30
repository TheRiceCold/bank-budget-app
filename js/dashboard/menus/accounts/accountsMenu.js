import { accountsToDisplay } from '../../../utils/accountsToDisplay.js'
import { getStoredAccounts } from '../../../utils/storage.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import MenuHTML from '../../html/MenuHTML.js'

const accounts = accountsToDisplay(getStoredAccounts())

const content = {
  id: 'accountsMenu', 
  title: 'Accounts', 
  inner: [
    `<input type="text" id="accountSearch" class="search" placeholder="Search"/>`,
    jsonTable(accounts).outerHTML,
  ]
}

const accountsMenu = new MenuHTML(content)
export { accountsMenu }
