import { getInsightsUpdate } from './insightsUpdate.js'
import * as DOM from '../../../utils/dom.js'

const seeAllUsers = () => {
  const link = DOM.get('.sidebar #accountsLink')
  const btn = DOM.get('#newAccounts a')
  btn.onclick = () => link.click()
}

const updateInsights = () => {
  const updates = getInsightsUpdate()
  const cards = DOM.getAll('#insights .card')
  cards.forEach((card, i) => {
    const total = card.querySelector('#total')
    const info = card.querySelector('small')

    total.innerText = '₱'+updates[i].total
    info.innerText = updates[i].info
  })
}

const mainManager = () => {
  updateInsights()
  seeAllUsers()
}

export { mainManager }
