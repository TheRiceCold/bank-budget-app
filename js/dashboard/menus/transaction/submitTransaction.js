import * as DOM from '../../../utils/dom.js'
import { loggedAccount } from '../../../utils/storage.js'

const addToHistory = (type, amount) => {
  const history = loggedAccount.history
  const today = new Date().toLocaleDateString()
  const balanceTxt = DOM.get('#transactionMenu #balance')
  const balance = loggedAccount.balance

  history.push({
    type: type,
    amount: amount,
    date: today
  })

  localStorage.loggedAccount = JSON.stringify(loggedAccount)
  balanceTxt.innerText = '₱' + balance
}

const submitTransaction = (type, amount) => {
  let balance = Number(loggedAccount.balance)
  if (type === 'deposit') {
    balance += amount
    loggedAccount.balance = balance
    addToHistory(type, amount)
  }
  else if (amount <= balance) {
    balance -= amount
    loggedAccount.balance = balance
    addToHistory(type, amount)
  }
  else alert('not enough balance')
}


export { submitTransaction }
