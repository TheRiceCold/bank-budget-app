import { defaultList } from './defaultList.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import MenuHTML from '../../html/MenuHTML.js'

if (!localStorage.accounts)
  localStorage.accounts = JSON.stringify(defaultList)

const storedAccounts = localStorage.accounts
  ? JSON.parse(localStorage.accounts) : []

const content = {
  id: 'accountsMenu', 
  title: 'Accounts', 
  inner: [
    `<input type="text" id="searchInput" placeholder="Search"/>`,
    jsonTable(storedAccounts).outerHTML
  ]
}

const accountsMenu = new MenuHTML(content)
export { accountsMenu }
