import { getUsersAsTable } from '../../extras/getUsersAsTable.js'
import { tableToArray } from '../../extras/tableToArray.js'
import { removeAllChild } from '../../../utils/helpers.js'
import MenuHTML from '../../html/MenuHTML.js'
import * as DOM from '../../../utils/dom.js'

class UsersMenu extends MenuHTML {
  constructor() {
    const id = 'accountsMenu'
    const title = 'All Users'
    const searchInput = `<input type="text" id="accountSearch" class="search" placeholder="Search"/>`
    super({ id: id, title: title, inner: searchInput })
  }

  manager() {
    this.updateTable()
    this.search()
  }

  updateTable() {
    const oldTable = DOM.get('#accountsMenu table')
    if (oldTable) oldTable.remove()

    const newTable = getUsersAsTable()
    this.html.innerHTML += newTable
  }

  search() {
    const menu = '#accountsMenu '
    const table = DOM.get(menu + 'table')
    const tableData = tableToArray(table)
    const searchInput = DOM.get('#accountSearch')

    searchInput.onkeyup = e => {
      const term = e.target.value
      this.searchTable(tableData, term)
    }
  }

  searchTable(tableData, term){
    const menu = '#accountsMenu '
    const data = this.findTerm(tableData, term)
    const tbody = DOM.get(menu + 'tbody')

    removeAllChild(tbody)
    this.createTable(tbody, data)  
  }

  createTable (tbody, data) {
    data.forEach(row => {
      const curRow = DOM.create('tr')
      row.forEach(item => {
        const curCell = DOM.create('td')
        curCell.innerText = item
        curRow.append(curCell)
      })
      tbody.append(curRow)
    })
  }

  findTerm(tableData, term) {
    term = term.toLowerCase()

    if (!term) return tableData

    return tableData.filter(row => 
      row.find(item => 
        item.toLowerCase().includes(term)))
  }
}

export default UsersMenu
