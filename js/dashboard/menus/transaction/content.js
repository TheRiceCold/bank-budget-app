import ModalHTML from '../../html/ModalHTML.js'
import MyHTML from '../../../utils/MyHTML.js'

const buttons = ['deposit', 'withdraw', 'transfer']
  .map(btn => `<button id="${btn}Btn">${btn}</button>`).join(' ')

const topBar = new MyHTML({
  className: 'topbar',
  inner: '<p class="text">current balance</p><p id="balance"></p>'
}).string

const modal = new ModalHTML({ id: 'transactionModal' }).string
const content = new MyHTML({
  className: 'transaction-container',
  inner: [ topBar, buttons, modal ]
}).string

export { content }
