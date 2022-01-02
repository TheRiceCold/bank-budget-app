import MyHTML from '../../../utils/MyHTML.js'
import CardHTML from '../../html/CardHTML.js'

const insightList = [
  {
    id: 'balance',
    title: 'balance',
    icon: 'fas fa-piggy-bank'
  },
  {
    id: 'expenses',
    title: 'total expenses',
    icon: 'fas fa-coins'
  },
  {
    id: 'withdrawals',
    title: 'total withdrawals',
    icon: 'fas fa-money-check-alt'
  },
  {
    id: 'transfers',
    title: 'last transfer',
    icon: 'fas fa-hand-holding-usd'
  }
]

const cards = insightList.map(card => new CardHTML(card).string).join('')
const content = { id: 'insights', inner: cards }
const insights = new MyHTML(content).string
export { insights }
