import { accountsForDisplay } from '../../extras/getUsersAsTable.js'
import { getUsersAsTable } from '../../extras/getUsersAsTable.js'
import { removeAllChild } from '../../../utils/helpers.js'
import { jsonToTable } from '../../extras/jsonToTable.js'
import MenuHTML from '../../html/MenuHTML.js'
import * as DOM from '../../../utils/dom.js'

class AccountListMenu extends MenuHTML {
  constructor() {
    const id = 'accountsMenu'
    const title = 'Account Masterlist'
    const searchInput = `<input type="text" id="accountSearch" class="search" placeholder="Search"/>`
    super({ id: id, title: title, inner: searchInput })
    this.appId = '#accountsMenu '
    this.currentPage = 0 // 1st Page
    this.numOfRows = 10
    this.allAccounts = accountsForDisplay()
  }

  manager() {
    this.updateTable()
  }

  updateTable() {
    // resets
    const oldTable = DOM.get(this.appId+'table')
    if (oldTable) oldTable.remove()
    const oldPagination = DOM.get(this.appId+'#pagination')
    if (oldPagination) oldPagination.remove()

    const start = this.numOfRows * this.currentPage
    const end = start + this.numOfRows
    this.paginatedAccounts = this.allAccounts.slice(start, end)
    const newTable = jsonToTable(this.paginatedAccounts).outerHTML
    const pagination = '<ul id="pagination"></ul>'
    this.html.innerHTML += newTable + pagination

    this.setupPagination()
    this.search()
  }

  setupPagination() {
    const pagination = DOM.get('#pagination')
    let pageCount = Math.ceil(this.allAccounts.length / this.numOfRows)
    for (let i = 1; i <= pageCount; i++) {
      let btn = this.paginationButton(i, pagination)
      pagination.append(btn)
    }
  }

  paginationButton(pageNo, pagination) {
    let button = DOM.create('button')
    button.innerText = pageNo

    //if (this.currentPage === pageNo) 
      //button.classList.add('active')

    button.onclick = () => {
      this.currentPage = pageNo-1
      pagination.remove()
      this.updateTable()
    }
      //displayList(items, listEl, rows, curPage)
    //}

    return button
  }

  search() {
    const menu = '#accountsMenu '
    const table = DOM.get(menu + 'table')
    const accountListData = accountsForDisplay().map(account => Object.values(account))
    const searchInput = DOM.get('#accountSearch')

    searchInput.onkeyup = e => {
      const term = e.target.value
      this.searchTable(accountListData, term)
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
    const accountListData = this.paginatedAccounts
      .map(account => Object.values(account))

    if (!term) return accountListData

    return tableData.filter(row => 
      row.find(item => item.toString().toLowerCase().includes(term)))
  }
}

export default AccountListMenu
