import { storedAccounts } from '../../../utils/storage.js'
import { jsonTable } from '../../../utils/jsonTable.js'
import MyHTML from '../../../utils/MyHTML.js'

const tableAccounts = list => {
  const accounts = list.map(account => {
    const cloneAccount = Object.assign({}, account)

    delete cloneAccount.id
    delete cloneAccount.password
    delete cloneAccount.mobile
    
    return cloneAccount
  })

  return accounts
}

const list = tableAccounts(storedAccounts).reverse()
list.length = 5

const content = {
  id: 'newAccounts',
  inner: [
    '<h2>New Registered Accounts</h2>',
    jsonTable(list).outerHTML,
    '<a href="#">See All</a>'
  ]
}

const newAccounts = new MyHTML(content).string
export { newAccounts }
