import { enterTransaction } from './enterTransaction.js'
import MyHTML from '../../../utils/MyHTML.js'
import * as DOM from '../../../utils/dom.js'

const openModal = e => {
  const modalBg = DOM.get('#modalBackground')
  modalBg.style.visibility = 'visible'

  const modal = DOM.get('.modal')
  modal.style.visibility = 'visible'

  const title =  modal.querySelector('h2')
  title.innerText = e.target.innerText 

  enterTransaction(modal)
  modalBg.onclick = () => closeModal(modalBg)
}

const closeModal = modalBg => {
  const modal = DOM.get('.modal')
  modal.style.visibility = 'hidden'
  modalBg.style.visibility = 'hidden'
  modal.querySelector('#amount').value = ''
}

const content = {
  className: 'modal',
  id: 'transactionModal',
  inner: [
    '<h2></h2>',
    '<input type="number" id="amount" placeholder="Amount"/>',
    '<button class="btn" id="enterBtn">Enter</button>'
  ]
}

const modal = new MyHTML(content).string
export { modal, openModal, closeModal }
