import { jsonTable } from '../../../utils/jsonTable.js'
import MyHTML from '../../../utils/MyHTML.js'

if (!localStorage.accounts)
  localStorage.accounts = JSON.stringify(defaultList)

const storedAccounts = localStorage.accounts
  ? JSON.parse(localStorage.accounts) : []

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
