import { getLoggedAccount } from '../../../utils/storage.js'
import { cardContent } from './cardContent.js'

const allCards = () => {
  const history = getLoggedAccount().history
  let cards = history.map(card => {
    const { type } = card
    const icon = 
      type === 'deposit' ?
        'far fa-credit-card' :
      type === 'withdraw' ?
        'fas fa-money-check-alt' :
      type === 'transfer' ? 
        'fas fa-hand-holding-usd' :
        'fas fa-coins'

    return cardContent(card, icon)
  })
  
  cards = cards.reverse()
  cards.length = 15
  return cards.join(' ')
}

export { allCards }
