import { updateUserInStorage } from '../../../utils/storage.js'
import { getStoredUsers } from '../../../utils/storage.js'
import { getLoggedUser } from '../../../utils/storage.js'
import { setLoggedUser } from '../../../utils/storage.js'
import { addToHistory } from '../history/addToHistory.js'
import * as DOM from '../../../utils/dom.js'
import { closeModal } from './modal.js'

const getUserByEmail = email => {
  let found = false
  const users = getStoredUsers()
  found = users.find(user => {
    if (user.email === email)
      return user
  })
  return found
}

const updateBalance = (user, balance) => {
  user.balance = balance
  updateUserInStorage(user)

  if (user.email === getLoggedUser().email) {
    const id = '#transactionMenu '
    const balanceTxt = DOM.get(id + '#balance')
    balanceTxt.innerText = '₱' + balance
  }
}

const transfer = (user, amount) => {
  let balance = Number(user.balance)
  const email = DOM.get('#receiver').value
  const receiver = getUserByEmail(email)

  if(receiver) {
    balance -= amount
    receiver.balance += amount

    updateBalance(user, balance)   
    updateBalance(receiver, receiver.balance)

    setLoggedUser(user)
    addToHistory('transfer', amount, receiver.email)
    closeModal()
  }
  else if(!receiver)
    alert('cannot find email')
  else 
    alert('email cannot be empty')
}

const checkTransaction = (type, amount) => {
  const user = {...getLoggedUser()}
  let balance = Number(user.balance)
  amount = Number(amount)

  if (type === 'deposit') {
    balance += amount
    updateBalance(user, balance)
    setLoggedUser(user)
    addToHistory(type, amount)
    closeModal()
  }
  else if (amount <= balance) {
    if (type === 'withdraw') {
      balance -= amount 
      updateBalance(user, balance)
      setLoggedUser(user)
      addToHistory(type, amount)
      closeModal()
    }
    else if (type === 'transfer') 
      transfer(user, amount)
  }
  else alert('not enough balance')
}

export { checkTransaction }
