import { loggedAccount } from '../../../utils/storage.js'
import * as DOM from '../../../utils/dom.js'

const budgetManager = () => {
  const form = DOM.get('#budgetMenu form')
  const enterBtn = DOM.get('#budgetMenu #enter')
  const amountInput = form.amount
  
  enterBtn.onclick = e => {
    e.preventDefault()

    const today = new Date().toLocaleDateString()
    let balance = Number(loggedAccount.balance)
    const amount = Number(amountInput.value)

    balance -= amount

    loggedAccount.balance = balance

    const history = loggedAccount.history
    history.push({
      type: 'expense',
      amount: amount,
      date: today
    })

    console.log(loggedAccount)
  }
}
  
export { budgetManager }
