import { accountsForDisplay } from '../../extras/accountsForDisplay.js'
import { jsonToTable } from '../../extras/jsonToTable.js'
import { getInsightsUpdate } from './insightsUpdate.js'
import MenuHTML from '../../html/MenuHTML.js'
import MyHTML from '../../../utils/MyHTML.js'
import * as DOM from '../../../utils/dom.js'
import { insights } from './insights.js'

class MainMenu extends MenuHTML {
  constructor() {
    const id = 'mainMenu'
    const title = 'Dashboard'
    super({ id: id, title: title, inner: insights })
    this.setNewAccountsTable()
  }

  manager() {
    this.updateInsights()
    this.updateNewAccountsTable()
    this.seeAllAccounts()
  }

  setNewAccountsTable() {
    let accounts = accountsForDisplay()
    const tableSize = accounts.length
    accounts = accounts.reverse()
    accounts.length = 5

    const tableTitle = '<h2>New registered accounts</h2>'
    const table = jsonToTable(accounts).outerHTML
    const tableBtn = '<a>See all</a>'
    const newAccountsTable = new MyHTML({
      id: 'newAccounts',
      inner: [tableTitle, table, tableBtn]
    }).string
    this.html.innerHTML += newAccountsTable
  }

  updateInsights() {
    const updates = getInsightsUpdate()
    const cards = DOM.getAll('#insights .card')
    cards.forEach((card, i) => {
      const total = card.querySelector('#total')
      const info = card.querySelector('small')

      total.innerText = updates[i].total
      info.innerText = updates[i].info
    })
  }

  updateNewAccountsTable() {
    const oldTable = DOM.get('#newAccounts table')
    let accounts = accountsForDisplay()
    accounts = accounts.reverse()
    accounts.length = 5
    const newTable = jsonToTable(accounts).outerHTML
    oldTable.innerHTML = newTable
  }

  seeAllAccounts() {
    const link = DOM.get('.sidebar #accountsLink')
    const btn = DOM.get('#newAccounts a')
    btn.onclick = () => link.click()
  }
}

export default MainMenu
