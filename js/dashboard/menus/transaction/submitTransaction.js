import * as DOM from '../../../utils/dom.js'
import { loggedAccount } from '../../../utils/storage.js'

const addToHistory = (type, amount) => {
  const history = loggedAccount.history

  const date = new Date()
  const today = date.toLocaleDateString()

  const timeFormat = { hour: '2-digit', minute: '2-digit' }
  let time = date.toLocaleString([], timeFormat)
  time = time.replace(/\s/, '')

  const balanceTxt = DOM.get('#transactionMenu #balance')
  const balance = loggedAccount.balance

  history.push({
    type: type,
    amount: amount,
    time: time,
    date: today
  })

  localStorage.loggedAccount = JSON.stringify(loggedAccount)
  balanceTxt.innerText = '₱' + balance
}

export const submitTransaction = (form, type) => {
  let balance = Number(loggedAccount.balance)
  const amount = Number(form.amount.value)

  if (type === 'deposit') {
    balance += amount
    loggedAccount.balance = balance
    addToHistory(type, amount)
    form.reset()
  }
  else if (amount <= balance) {
    balance -= amount
    loggedAccount.balance = balance
    addToHistory(type, amount)
    form.reset()
  }
  else alert('not enough balance')
}
