import { getStoredAccounts } from '../../../utils/storage.js'
import { setStoredAccounts } from '../../../utils/storage.js'
import { setLoggedAccount } from '../../../utils/storage.js'
import { getLoggedAccount } from '../../../utils/storage.js'
import * as DOM from '../../../utils/dom.js'
import { closeModal } from './modal.js'

const findEmail = email => {
  let found = false
  const accounts = getStoredAccounts()
  found = accounts.find(account => {
    if (account.email === email)
      return account
  })
  return found
}

const replaceInStorage = (email, amount) => {
  const newAccount = {...findEmail(email)}
  newAccount.balance += amount
  
  const newList = getStoredAccounts().map(account => {
    if (account.email === email)
      account = newAccount
    return account
  })

  setStoredAccounts(newList)
}

const addToHistory = (type, amount, email) => {
  const loggedAccount = getLoggedAccount()
  const history = loggedAccount.history

  const date = new Date()
  const today = date.toLocaleDateString()

  const timeFormat = { hour: '2-digit', minute: '2-digit' }
  let time = date.toLocaleString([], timeFormat)
  time = time.replace(/\s/, '')

  const balanceTxt = DOM.get('#transactionMenu #balance')
  const balance = loggedAccount.balance

  const toPush = type === 'transfer' 
    ? {
      type: type,
      amount: amount,
      date: `(${time}) ${today}`,
      email: email
    } : { 
      type: type, amount: amount, 
      time: time, date: today 
    }

  history.push(toPush)

  setLoggedAccount(loggedAccount)
  balanceTxt.innerText = '₱' + balance

  replaceInStorage(email || loggedAccount.email, amount)
  closeModal()
}

export { addToHistory, findEmail }
