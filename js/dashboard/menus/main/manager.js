import { accountsToDisplay } from '../../extras/usersToDisplay.js'
import { getStoredAccounts } from '../../../utils/storage.js'
import { getInsightsUpdate } from './insightsUpdate.js'
import { jsonTable } from '../../extras/jsonToTable.js'
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

const newUsersTable = () => {
  const container = DOM.get('#newAccounts')
  const list = accountsToDisplay(getStoredAccounts()).reverse()
  list.length = 5
  const table = jsonTable(list)

  const seeAllBtn = DOM.create('a')
  seeAllBtn.innerText = 'See All'

  container.append(table, seeAllBtn)
}

const mainManager = () => {
  updateInsights()
  newUsersTable()
  seeAllUsers()
}

export { mainManager }
