import MyHTML from '../../../utils/MyHTML.js'
import CardHTML from '../../html/CardHTML.js'

const insightList = [
  {
    id: 'balance',
    title: 'registered accounts',
    icon: 'fas fa-users'
  },
  {
    id: 'expenses',
    title: 'total deposits',
    icon: 'far fa-credit-card'
  },
  {
    id: 'withdrawals',
    title: 'total withdrawals',
    icon: 'far fa-money-bill-alt'
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
