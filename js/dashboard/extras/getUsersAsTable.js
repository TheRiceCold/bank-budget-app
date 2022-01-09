import { getStoredAccounts } from '../../storage/accountStorage.js'
import { jsonToTable } from './jsonToTable.js'
import MyHTML from '../../utils/MyHTML.js'

const accountsForDisplay = () => {
  const accounts = getStoredAccounts()
    .map(account => {
      const cloneAccount = {...account}

      delete cloneAccount.password
      delete cloneAccount.mobile
      delete cloneAccount.budget
      delete cloneAccount.expenses
      
      return cloneAccount
    })

  return accounts
}

const getUsersAsTable = (sort = '', size) => {
  let users = accountsForDisplay()
  const tableSize = users.length
  if (sort === 'desc') users = users.reverse()
  users.length = size || tableSize

  const table = jsonToTable(users).outerHTML
  return table
}

export { getUsersAsTable, accountsForDisplay }
