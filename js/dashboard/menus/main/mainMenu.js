import { getUsersAsTable } from '../../extras/getUsersAsTable.js'
import { getInsightsUpdate } from './insightsUpdate.js'
import MenuHTML from '../../html/MenuHTML.js'
import MyHTML from '../../../utils/MyHTML.js'
import * as DOM from '../../../utils/dom.js'
import { insights } from './insights.js'

class MainMenu extends MenuHTML {
  constructor() {
    const id = 'mainMenu'
    const title = 'Dashboard'

    const tableId = 'newAccounts'
    const tableUsers = getUsersAsTable('desc', 5)
    const tableTitle = '<h2>New registered users</h2>'
    const tableBtn = '<a>See all</a>'
    const tableContent  = [ tableTitle, tableUsers, tableBtn]
    const newUsersTable = new MyHTML({ id: tableId, inner: tableContent }).string

    const content = [ insights, newUsersTable ]
    super({ id: id, title: title, inner: content })
  }

  manager() {
    this.updateInsights()
    this.seeAllUsers()
  }

  seeAllUsers() {
    const link = DOM.get('.sidebar #accountsLink')
    const btn = DOM.get('#newAccounts a')
    btn.onclick = () => link.click()
  }

  updateInsights() {
    const updates = getInsightsUpdate()
    const cards = DOM.getAll('#insights .card')
    cards.forEach((card, i) => {
      const total = card.querySelector('#total')
      const info = card.querySelector('small')

      total.innerText = '₱'+updates[i].total
      info.innerText = updates[i].info
    })
  }
}

export default MainMenu
