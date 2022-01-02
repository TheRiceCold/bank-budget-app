import { getUsersAsTable } from '../extras/getUsersAsTable.js'
import { tableToArray } from '../extras/tableToArray.js'
import { searchTable } from '../extras/searchTable.js'
import MenuHTML from '../html/MenuHTML.js'
import * as DOM from '../../utils/dom.js'

class UsersMenu extends MenuHTML {
  constructor() {
    const id = 'accountsMenu'
    const title = 'All Users'
    const searchInput = `<input type="text" id="accountSearch" class="search" placeholder="Search"/>`
    const table = getUsersAsTable()
    const content = [searchInput, table]

    super({ id: id, title: title, inner: content })
  }

  manager() {
    this.searchAccount()
  }

  searchAccount() {
    const menu = '#accountsMenu '
    const table = DOM.get(menu + 'table')
    const tableData = tableToArray(table)
    const searchInput = DOM.get('#accountSearch')

    searchInput.onkeyup = e => {
      const term = e.target.value
      searchTable(tableData, term)
    }
  }
}

export default UsersMenu
