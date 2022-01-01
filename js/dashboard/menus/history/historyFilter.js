import { history } from '../../../utils/storage.js'
import * as DOM from '../../../utils/dom.js'

const historyFilter = () => {
   const buttons = DOM.getAll('#historyMenu button')
   const cards = DOM.getAll('#historyMenu .card')

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

export { historyFilter }
