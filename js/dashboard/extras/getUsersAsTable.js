import { getStoredAccounts } from '../../utils/storage.js'
import { jsonToTable } from './jsonToTable.js'
import MyHTML from '../../utils/MyHTML.js'

const usersToDisplay = list => {
  const accounts = list.map(account => {
    const cloneAccount = Object.assign({}, account)

    delete cloneAccount.password
    delete cloneAccount.mobile
    delete cloneAccount.expenses
    
    return cloneAccount
  })

  return accounts
}

const getUsersAsTable = (sort = '', size) => {
  let usersForDisplay = usersToDisplay(getStoredAccounts())
  const tableSize = usersForDisplay.length
  if (sort === 'desc') usersForDisplay = usersForDisplay.reverse()
  usersForDisplay.length = size || tableSize

  const table = jsonToTable(usersForDisplay).outerHTML
  return table
}

export { getUsersAsTable }
