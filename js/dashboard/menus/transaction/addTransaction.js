import { submitTransaction } from './submitTransaction.js'
import { loggedAccount } from '../../../utils/storage.js'
import * as DOM from '../../../utils/dom.js'

const getType = () => {
  const types = DOM.getAll('#transactionMenu input[name="type"]')
  for (const t of types) 
    if (t.checked) return t.id
}

const callback = e => {
  e.preventDefault()
  const form = e.target
  const type = getType()
  submitTransaction(form, type, amount)
}

const addTransaction = () => {
  const id = '#transactionMenu '
  const form = DOM.get(id + 'form')
  const balanceTxt = DOM.get(id + '#balance')
  balanceTxt.innerText = loggedAccount.balance
  form.onsubmit = callback
}
  
export { addTransaction }
