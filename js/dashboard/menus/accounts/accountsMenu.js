import { accountsToDisplay } from '../../extras/usersToDisplay.js'
import { getStoredAccounts } from '../../../utils/storage.js'
import { jsonTable } from '../../extras/jsonToTable.js'
import MenuHTML from '../../html/MenuHTML.js'

const searchInput = `<input type="text" id="accountSearch" class="search" placeholder="Search"/>`
const accounts = accountsToDisplay(getStoredAccounts())
const table = jsonTable(accounts).outerHTML

const content = {
  id: 'accountsMenu', 
  title: 'All Users', 
  inner: [searchInput, table]
}

const accountsMenu = new MenuHTML(content)
export { accountsMenu }
