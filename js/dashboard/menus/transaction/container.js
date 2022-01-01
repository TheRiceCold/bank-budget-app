import { modal } from './modal.js'
import MyHTML from '../../../utils/MyHTML.js'

const buttons = ['deposit', 'withdraw', 'transfer']
  .map(btn => `<button id="${btn}Btn">${btn}</button>`).join(' ')

const header = new MyHTML({
  className: 'topbar',
  inner: ['<p class="text"></p>', '<p id="balance"></p>']
}).string

const content = {
  className: 'transaction-container',
  inner: [
    header, buttons, modal, 
    '<div id="modalBackground"></div>'
  ]
}

const container = new MyHTML(content).string
export { container }
