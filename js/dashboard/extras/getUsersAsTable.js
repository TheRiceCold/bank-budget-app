import {getStoredUsers} from '../../storage/control.js'
import {jsonToTable} from './jsonToTable.js'

const usersToDisplay = list => {
  const accounts = list.map(account => {
    const cloneAccount = Object.assign({}, account)

    delete cloneAccount.password
    delete cloneAccount.mobile
    delete cloneAccount.history
    delete cloneAccount.expenses
    
    return cloneAccount
  })

  return accounts
}

const getUsersAsTable = (sort = '', size) => {
  let usersForDisplay = usersToDisplay(getStoredUsers())
  const tableSize = usersForDisplay.length

  if (sort === 'desc') 
    usersForDisplay = usersForDisplay.reverse()

  usersForDisplay.length = size || tableSize

  return jsonToTable(usersForDisplay).outerHTML
}

export { getUsersAsTable }
