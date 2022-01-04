import { getLoggedUser } from '../../../utils/storage.js'
import * as DOM from '../../../utils/dom.js'

const budgetManager = () => {
  const user = getLoggedUser()
  const form = DOM.get('#budgetMenu form')
  const enterBtn = DOM.get('#budgetMenu #enter')
  const amountInput = form.amount
  
  enterBtn.onclick = e => {
    e.preventDefault()

    const today = new Date().toLocaleDateString()
    let balance = Number(user.balance)
    const amount = Number(amountInput.value)

    if (amount > balance) {
      alert('not enough balance')
      return
    }

    balance -= amount
  }
}

export { budgetManager }
