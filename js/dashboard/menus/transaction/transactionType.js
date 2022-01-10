import { updateAccountInStorage } from '../../../storage/accountStorage.js'
import { getAccountById } from '../../../storage/accountStorage.js'
import { addToHistory } from '../history/addToHistory.js'
import * as DOM from '../../../utils/dom.js'

const closeModal = () => {
  const modalBg = DOM.get('#modalBg')

  const modal = DOM.get('.modal')

  DOM.delClass(modal, 'show')
  DOM.delClass(modalBg, 'show')

  const receiverId = DOM.get('#receiverId')
  DOM.delClass(receiverId, 'show')

  modal.querySelector('#amount').value = ''
}

const transfer = (account, amount) => {
  const receiverId = DOM.get('#receiverId').value
  const receiverAccount = getAccountById(receiverId)

  if(receiverAccount) {
    const senderEmail = account.email
    const receiverEmail = receiverAccount.email
    account.balance -= Number(amount)
    receiverAccount.balance += Number(amount)
    updateAccountInStorage(account)
    updateAccountInStorage(receiverAccount)
    addToHistory('transfer', amount, senderEmail, receiverEmail)
    closeModal()
  }
  else if(!receiverAccount)
    alert('Receiver ID cannot found')
  else 
    alert('email cannot be empty')
}

const checkTransaction = (type, senderId, amount) => {
  const account = {...getAccountById(senderId)}
  const email = account.email
  let balance = account.balance

  if (Object.entries(account).length === 0) {
    alert('account does not exits')
  } 
  else if (type === 'deposit') {
    balance += Number(amount)
    account.balance = balance
    updateAccountInStorage(account)
    addToHistory(type, amount, email)
    closeModal()
  }
  else if (amount <= balance) {
    if (type === 'withdraw') {
      balance -= Number(amount)
      account.balance = balance
      updateAccountInStorage(account)
      addToHistory(type, amount, email)
      closeModal()
    }
    else if (type === 'transfer') 
      transfer(account, amount, email)
  }
  else alert('not enough balance')
}

const transactionType = modal => {
  const transactionBtn = DOM.get('.transaction-btn')
  const type = DOM.get('#transactionType').innerText.toLowerCase()

  if (type === 'transfer') {
    const receiverId = DOM.get('.modal #receiverId')
    DOM.addClass(receiverId, 'show')
  }

  const enterBtn = modal.querySelector('button')
  enterBtn.onclick = () => {
    let senderId = DOM.get('.modal #senderId').value
    let amount = DOM.get('.modal #amount').value

    if (amount <= 0 || !amount) {
      alert('zero or negative values are not allowed')
      return
    }
    checkTransaction(type, senderId, amount)
    closeModal()
  }
}

export { transactionType }
