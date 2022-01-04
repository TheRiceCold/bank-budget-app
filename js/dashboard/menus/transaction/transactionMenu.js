import { getLoggedUser } from '../../../storage/control.js'
import MenuHTML from '../../html/MenuHTML.js'
import * as DOM from '../../../utils/dom.js'
import { openModal } from './modal.js'
import { content } from './content.js'

class TransactionMenu extends MenuHTML {
  constructor() {
    const id = 'transactionMenu'
    const title = 'Transaction'
    super({ id: id, title: title, inner: content })
  }

  manager() {
    this.transactionButtons()
    this.showBalance()  
  }

  showBalance() {
    const id = '#transactionMenu '
    const balanceTxt = DOM.get(id + '#balance')
    const balance = '₱' + getLoggedUser().balance
    balanceTxt.innerText = balance
  }

  transactionButtons() {
    const container = '.transaction-container '
    const buttons = DOM.getAll(container + 'button')
    buttons.forEach(btn => btn.onclick = openModal)
  }
}

export default TransactionMenu
