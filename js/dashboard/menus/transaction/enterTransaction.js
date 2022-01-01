import { loggedAccount } from '../../../utils/storage.js'
import { addToHistory } from './addToHistory.js'
import * as DOM from '../../../utils/dom.js'
import { closeModal } from './modal.js'

const checkTransaction = (type, amount) => {
  type = type.toLowerCase()
  let balance = Number(loggedAccount.balance)

  if (type === 'deposit') {
    balance += Number(amount)
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

const enterTransaction = modal => {
  const enterBtn = modal.querySelector('button')
  enterBtn.onclick = () => {
    const type = modal.querySelector('h2').innerText
    let amount = DOM.get('#amount').value
    checkTransaction(type, amount)
    amount = ''

    const modalBg = DOM.get('#modalBackground')
    closeModal(modalBg)
  }
}

export { enterTransaction }
