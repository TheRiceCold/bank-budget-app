import { checkTransaction } from './checkTransaction.js'
import * as DOM from '../../../utils/dom.js'

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
  }
}

export { enterTransaction }
