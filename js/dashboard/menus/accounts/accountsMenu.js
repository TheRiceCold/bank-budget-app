import { usersToDisplay } from '../../extras/usersToDisplay.js'
import { getStoredAccounts } from '../../../utils/storage.js'
import { jsonToTable } from '../../extras/jsonToTable.js'
import MenuHTML from '../../html/MenuHTML.js'

const searchInput = `<input type="text" id="accountSearch" class="search" placeholder="Search"/>`
const accounts = usersToDisplay(getStoredAccounts())
const table = jsonToTable(accounts).outerHTML

const content = {
  id: 'accountsMenu', 
  title: 'All Users', 
  inner: [searchInput, table]
}

const accountsMenu = new MenuHTML(content)
export { accountsMenu }
