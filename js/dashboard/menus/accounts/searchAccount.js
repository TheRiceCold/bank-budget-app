import { searchTable } from './searchTable.js'
import * as dom from '../../../utils/dom.js'

const tableToArray = table => {
  const rowList = Array.from(table.children[1].children)

  const searchData = rowList.map(row => {
    const datas = Array.from(row.children)
    return datas.map(cell => cell.textContent) 
  })

  return searchData
}

const searchAccount = () => {
  const menu = '#accountsMenu '
  const table = dom.get(menu + 'table')
  const tableData = tableToArray(table)
  const searchInput = dom.get('#accountSearch')

  searchInput.addEventListener('keyup', e => {
    const term = e.target.value
    searchTable(tableData, term)
  })
}

export { searchAccount }
