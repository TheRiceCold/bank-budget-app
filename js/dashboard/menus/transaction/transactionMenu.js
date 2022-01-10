import { getLoggedAdmin } from '../../../storage/adminStorage.js'
import { transactionType } from './transactionType.js'
import MenuHTML from '../../html/MenuHTML.js'
import * as DOM from '../../../utils/dom.js'
import { content } from './content.js'

class TransactionMenu extends MenuHTML {
  constructor() {
    const id = 'transactionMenu'
    const title = 'Transaction Manager'
    super({ id: id, title: title, inner: content })
    this.appId = '#transactionMenu '
  }

  manager() {
    this.transactionButtons()
  }

  transactionButtons() {
    const buttons = DOM.getAll(this.appId + 'button')
    buttons.forEach(btn => btn.onclick = e => this.openModal(e))
  }

  openModal(e) {
    const modal = DOM.get('.modal')
    const modalBg = DOM.get('#modalBg')

    DOM.addClass(modal, 'show')
    DOM.addClass(modalBg, 'show')

    const title =  modal.querySelector('#transactionType')
    title.innerText = e.target.innerText 

    transactionType(modal)
    modalBg.onclick = e => this.closeModal(e)
  }

  closeModal(e) {
    const modalBg = e.target
    const modal = DOM.get('.modal')

    DOM.delClass(modal, 'show')
    DOM.delClass(modalBg, 'show')

    const sender = DOM.get('.modal #senderId')
    const receiver = DOM.get('#receiverId')
    DOM.delClass(receiver, 'show')

    sender.value = ''
    receiver.value = ''
    modal.querySelector('#amount').value = ''
  }
}

export default TransactionMenu
