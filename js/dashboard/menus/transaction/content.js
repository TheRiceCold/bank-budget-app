import ModalHTML from '../../html/ModalHTML.js'
import MyHTML from '../../../utils/MyHTML.js'

const buttonInfos = [
  {
    id: 'depositBtn',
    value: 'deposit',
  },
  {
    id: 'withdrawBtn',
    value: 'withdraw',
  },
  {
    id: 'transferBtn',
    value: 'transfer',
  },
  {
    id: 'balanceBtn',
    value: 'balance inquiry',
  }
]

const buttons = buttonInfos.map(btn => {
  const { id, value, type } = btn 
  return `<button id="${id}" class="transaction-btn" data-type="${type}">${value}</button>`
}).join(' ')

const modal = new ModalHTML({ id: 'transactionModal' }).string
const content = new MyHTML({
  className: 'transaction-container',
  inner: [ buttons, modal ]
}).string

export { content }
