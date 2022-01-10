import { getLoggedAdmin } from '../../../storage/adminStorage.js'
import { buttons, cards, cardContent } from './content.js'
import MenuHTML from '../../html/MenuHTML.js'
import * as DOM from '../../../utils/dom.js'

class HistoryMenu extends MenuHTML {
  constructor() {
    const id = 'historyMenu'
    const title = 'Transaction History'
    const content = [buttons, cards]
    super({ id: id, title: title, inner: content })
  }

  manager() {
    const menu = '#historyMenu '
    const cardList = DOM.get(menu + '#cards')
    cardList.innerHTML = this.updatedCards

    this.historyFilter()
  }

  historyFilter() {
    const menu = '#historyMenu '
    const cards = DOM.getAll(menu + '.card')
    const buttons = DOM.getAll(menu + 'button')

    buttons.forEach(b =>
     b.onclick = () => {
       buttons.forEach(li => li.classList.remove('active'))
       b.classList.add('active')

       const value = b.textContent
       cards.forEach(card => {
         card.style.display = 'none'
         if (card.dataset.filter === value.toLowerCase() || value === 'All')
           card.style.display = 'flex'
       })
     })
  }

  get updatedCards() {
    const history = getLoggedAdmin().history
    let cards = history.map(card => {
      const { type } = card
      const icon = 
        type === 'deposit' ?
          'far fa-credit-card' :
        type === 'withdraw' ?
          'fas fa-money-check-alt' :
          'fas fa-hand-holding-usd'

      return cardContent(card, icon)
    })
    
    cards = cards.reverse()
    cards.length = 15
    return cards.join(' ')
  }
}

export default HistoryMenu
