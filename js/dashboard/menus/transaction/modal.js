import { enterTransaction } from './enterTransaction.js'
import * as DOM from '../../../utils/dom.js'

const openModal = e => {
  const modal = DOM.get('.modal')
  const modalBg = DOM.get('#modalBg')

  DOM.addClass(modal, 'show')
  DOM.addClass(modalBg, 'show')

  const title =  modal.querySelector('h2')
  title.innerText = e.target.innerText 

  enterTransaction(modal)
  modalBg.onclick = closeModal
}

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

export { openModal, closeModal }
