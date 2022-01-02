import { loggedAccount } from '../../../utils/storage.js'
import { addToHistory } from './addToHistory.js'
import * as DOM from '../../../utils/dom.js'
import { closeModal } from './modal.js'

const checkTransaction = (type, amount) => {
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
  let type = modal.querySelector('h2')
  type = type.innerText.toLowerCase()

  if (type === 'transfer') {
    const receiver = DOM.get('#receiver')
    DOM.addClass(receiver, 'show')
  }

  const enterBtn = modal.querySelector('button')
  enterBtn.onclick = () => {
    let amount = DOM.get('#amount').value
    checkTransaction(type, amount)
    amount = ''

    closeModal()
  }
}

export { enterTransaction }
