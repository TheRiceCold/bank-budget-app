import { loggedAccount } from '../../../utils/storage.js'
import { historyFilter } from './historyFilter.js'
import * as DOM from '../../../utils/dom.js'

const addCards = () => {
  const history = loggedAccount.history
  let cards = history.map(card => {
    const { type, amount, time, date } = card
    const icon = 
      type === 'deposit' ?
        'far fa-credit-card' :
      type === 'withdraw' ?
        'fas fa-money-check-alt' :
      type === 'transfer' ? 
        'fas fa-hand-holding-usd' :
        'fas fa-coins'

    return `
    <div class="card" data-filter="${type}">
      <i class="${icon}"></i>
      <div class="content">
        <h3>${type} ₱${amount}</h3>
        <p>Time: ${time}</p>
        <p>Date: ${date}</p>
      </div>
    </div>`})
  
  cards = cards.reverse()
  cards.length = 15

  return cards.join(' ')
}


const displayHistory = () => {
  const menu = '#historyMenu '
  const cardList = DOM.get(menu + '#cards')
  cardList.innerHTML = addCards()
 
  historyFilter()
}

export { displayHistory } 
