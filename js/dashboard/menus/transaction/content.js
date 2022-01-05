import ModalHTML from '../../html/ModalHTML.js'
import MyHTML from '../../../utils/MyHTML.js'

const buttonInfos = [
  {
    id: 'depositBtn',
    value: 'deposit money',
  },
  {
    id: 'withdrawBtn',
    value: 'withdraw money'
  },
  {
    id: 'transferBtn',
    value: 'transfer money'
  },
  {
    id: 'balanceBtn',
    value: 'balance inquiry'
  }
]

const buttons = buttonInfos.map(btn => {
  const { id, value } = btn 
  return `<button id="${id}">${value}</button>`
}).join(' ')

const modal = new ModalHTML({ id: 'transactionModal' }).string
const content = new MyHTML({
  className: 'transaction-container',
  inner: [ buttons, modal ]
}).string

export { content }
