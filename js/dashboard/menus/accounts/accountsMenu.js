import { storedAccounts } from '../../../utils/storage.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import { defaultList } from './defaultList.js'
import MenuHTML from '../../html/MenuHTML.js'

const tableAccounts = list => {
  const accounts = list.map(account => {
    const cloneAccount = Object.assign({}, account)

    delete cloneAccount.password
    delete cloneAccount.mobile
    
    return cloneAccount
  })

  return accounts
}

const list = tableAccounts(storedAccounts)

const content = {
  id: 'accountsMenu', 
  title: 'Accounts', 
  inner: [
    `<input type="text" id="searchInput" placeholder="Search"/>`,
    jsonTable(list).outerHTML
  ]
}

const accountsMenu = new MenuHTML(content)
export { accountsMenu }
