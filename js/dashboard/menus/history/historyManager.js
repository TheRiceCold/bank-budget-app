import * as DOM from '../../../utils/dom.js'
import { allCards } from './allCards.js'

const historyFilter = () => {
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

const historyManager = () => {
  const menu = '#historyMenu '
  const cardList = DOM.get(menu + '#cards')
  cardList.innerHTML = allCards()
  historyFilter()
}

export { historyManager } 
