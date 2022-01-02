import { updateBalance } from '../../../utils/helpers.js'
import { openModal, closeModal } from './modal.js'
import * as DOM from '../../../utils/dom.js'

const transactionButtons = () => {
  const container = '.transaction-container '
  const buttons = DOM.getAll(container + 'button')
  buttons.forEach(btn => btn.onclick = openModal)
}

const transactionManager = () => {
  const id = '#transactionMenu '
  const balanceTxt = DOM.get(id + '#balance')

  updateBalance(balanceTxt)  
  transactionButtons()
}

export { transactionManager }
