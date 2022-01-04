import { checkTransaction } from './checkTransaction.js'
import * as DOM from '../../../utils/dom.js'

const closeModal = e => {
  const modalBg = e ? e.target 
    : DOM.get('#modalBg')

  const modal = DOM.get('.modal')

  DOM.delClass(modal, 'show')
  DOM.delClass(modalBg, 'show')

  const receiver = DOM.get('#receiver')
  DOM.delClass(receiver, 'show')

  modal.querySelector('#amount').value = ''
}

const modalType = modal => {
  let type = modal.querySelector('h2')
  type = type.innerText.toLowerCase()

  if (type === 'transfer') {
    const receiver = DOM.get('#receiver')
    DOM.addClass(receiver, 'show')
  }
  const enterBtn = modal.querySelector('button')
  enterBtn.onclick = () => {
    let amount = DOM.get('#amount').value

    if (amount < 0) {
      alert('Cannot in negative values')
      return
    }
    checkTransaction(type, amount)
    amount = ''
    closeModal()
  }
}

const openModal = e => {
  const modal = DOM.get('.modal')
  const modalBg = DOM.get('#modalBg')

  DOM.addClass(modal, 'show')
  DOM.addClass(modalBg, 'show')

  const title =  modal.querySelector('h2')
  title.innerText = e.target.innerText 

  modalType(modal)
  modalBg.onclick = closeModal
}

export { openModal, closeModal }
