import { getLoggedAccount } from '../../../utils/storage.js'
import ModalHTML from '../../html/ModalHTML.js'
import MenuHTML from '../../html/MenuHTML.js'
import MyHTML from '../../../utils/MyHTML.js'
import * as DOM from '../../../utils/dom.js'
import { openModal } from './modal.js'

class TransactionMenu extends MenuHTML {
  constructor() {
    const id = 'transactionMenu'
    const title = 'Transaction'

    const buttons = ['deposit', 'withdraw', 'transfer']
      .map(btn => `<button id="${btn}Btn">${btn}</button>`).join(' ')

    const topBar = new MyHTML({
      className: 'topbar',
      inner: '<p class="text">current balance</p><p id="balance"></p>'
    }).string

    const modal = new ModalHTML({ id: 'transactionModal' }).string
    const container = new MyHTML({
      className: 'transaction-container',
      inner: [ topBar, buttons, modal ]
    }).string
    
    super({ id: id, title: title, inner: container })
  }

  manager() {
    this.updateBalance()  
    this.transactionButtons()
  }

  updateBalance() {
    const id = '#transactionMenu '
    const balanceTxt = DOM.get(id + '#balance')
    const balance = '₱' + getLoggedAccount().balance
    balanceTxt.innerText = balance
  }

  transactionButtons() {
    const container = '.transaction-container '
    const buttons = DOM.getAll(container + 'button')
    buttons.forEach(btn => btn.onclick = openModal)
  }
}

export default TransactionMenu
