import { getStoredAccounts } from '../../storage/accountStorage.js'
import { jsonToTable } from './jsonToTable.js'
import MyHTML from '../../utils/MyHTML.js'

const accountsForDisplay = () => {
  const accounts = getStoredAccounts()
    .map(account => {
      const cloneAccount = {...account}

      cloneAccount.balance = '₱'+cloneAccount.balance.toLocaleString()
      delete cloneAccount.password
      delete cloneAccount.mobile
      delete cloneAccount.budget
      delete cloneAccount.expenses
      
      return cloneAccount
    })

  return accounts
}


export { accountsForDisplay }
