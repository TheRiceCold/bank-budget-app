import { updateAccountInStorage } from '../../../storage/accountStorage.js'
import { getAccountByEmail } from '../../../storage/accountStorage.js'
import { addToHistory } from '../history/addToHistory.js'
import * as DOM from '../../../utils/dom.js'

const closeModal = () => {
  const modalBg = DOM.get('#modalBg')

  const modal = DOM.get('.modal')

  DOM.delClass(modal, 'show')
  DOM.delClass(modalBg, 'show')

  const receiver = DOM.get('#receiver')
  DOM.delClass(receiver, 'show')

  modal.querySelector('#amount').value = ''
}

const transfer = (account, amount) => {
  const email = DOM.get('#receiver').value
  const receiver = getAccountByEmail(email)

  if(receiver) {
    account.balance -= Number(amount)
    receiver.balance += Number(amount)
    updateAccountInStorage(account)
    updateAccountInStorage(receiver)
    addToHistory('transfer', amount, receiver.email)
    closeModal()
  }
  else if(!receiver)
    alert('cannot find email')
  else 
    alert('email cannot be empty')
}

const checkTransaction = (type, email, amount) => {
  const account = {...getAccountByEmail(email)}
  let balance = account.balance

  if (type === 'deposit') {
    balance += Number(amount)
    account.balance = balance
    updateAccountInStorage(account)
    addToHistory(type, amount)
    closeModal()
  }
  else if (amount <= balance) {
    if (type === 'withdraw') {
      balance -= Number(amount)
      account.balance = balance
      updateAccountInStorage(account)
      addToHistory(type, amount)
      closeModal()
    }
    else if (type === 'transfer') 
      transfer(account, amount)
  }
  else alert('not enough balance')
}

const transactionType = modal => {
  const transactionBtn = DOM.get('.transaction-btn')
  const type = DOM.get('#transactionType').innerText.toLowerCase()

  if (type === 'transfer') {
    const receiver = DOM.get('#receiver')
    DOM.addClass(receiver, 'show')
  }

  const enterBtn = modal.querySelector('button')
  enterBtn.onclick = () => {
    let email = DOM.get('#email').value
    let amount = DOM.get('#amount').value

    if (amount < 0) {
      alert('Cannot in negative values')
      return
    }
    checkTransaction(type, email, amount)
    closeModal()
  }
}

export { transactionType }
