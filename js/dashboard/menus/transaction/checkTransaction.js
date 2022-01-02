import { getStoredAccounts } from '../../../utils/storage.js'
import { getLoggedAccount } from '../../../utils/storage.js'
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
    addToHistory(type, amount)
  }
  else if (amount <= balance) {
    balance -= amount
    loggedAccount.balance = balance

    if (type === 'transfer') {
      const email = DOM.get('#receiver').value
      if(findEmail(email)) {
        addToHistory(type, amount, email)
        replaceInStorage(email, amount)
      }
      else if(receiver)
        alert('cannot find email')
      else 
        alert('receiver cannot be empty')
    }
    else
      addToHistory(type, amount)
  }
  else alert('not enough balance')
}

export { checkTransaction }
