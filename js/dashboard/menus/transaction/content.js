import ModalHTML from '../../html/ModalHTML.js'
import MyHTML from '../../../utils/MyHTML.js'

const buttonInfos = [
  {
    id: 'depositBtn',
    value: 'deposit',
    icon: 'far fa-credit-card'
  },
  {
    id: 'withdrawBtn',
    value: 'withdraw',
    icon: 'far fa-money-bill-alt'
  },
  {
    id: 'transferBtn',
    value: 'transfer',
    icon: 'fas fa-hand-holding-usd'
  }
]

const buttons = buttonInfos.map(btn => {
  const { id, value, icon } = btn 
  return `<button id="${id}" class="transaction-btn">
    <i class="${icon}"></i>${value}</button>`
}).join(' ')

const modal = new ModalHTML({ id: 'transactionModal' }).string
const content = new MyHTML({
  id: 'container',
  inner: [ buttons, modal ]
}).string

export { content }
