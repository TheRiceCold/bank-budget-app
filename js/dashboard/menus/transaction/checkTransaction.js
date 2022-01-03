import { getStoredAccounts } from '../../../utils/storage.js'
import { getLoggedAccount } from '../../../utils/storage.js'
import { setLoggedAccount } from '../../../utils/storage.js'
//import { replaceInStorage } from '../../../utils/storage.js'
import { addToHistory } from './addToHistory.js'
import { findEmail } from './addToHistory.js'
import * as DOM from '../../../utils/dom.js'

const checkTransaction = (type, amount) => {
  const loggedAccount = {...getLoggedAccount()}
  let balance = Number(loggedAccount.balance)
  amount = Number(amount)

  if (type === 'deposit') {
    balance += amount
    loggedAccount.balance = balance
    setLoggedAccount(loggedAccount)
    addToHistory(type, amount)
  }
  else if (amount <= balance) {
    if (type === 'transfer') {
      balance -= amount
      loggedAccount.balance = balance
      setLoggedAccount(loggedAccount)
      const email = DOM.get('#receiver').value
      if(findEmail(email)) {
        addToHistory(type, amount, email)
        //replaceInStorage(email, amount)
      }
      else if(!findEmail(email))
        alert('cannot find email')
      else 
        alert('receiver cannot be empty')
    }
    else if (type === 'withdraw') {
      balance -= amount 
      loggedAccount.balance = balace
      setLoggedAccount(loggedAccount)
    }
    else
      addToHistory(type, amount)
  }
  else alert('not enough balance')
}

export { checkTransaction }
