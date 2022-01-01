import { searchTable } from '../../../utils/searchTable.js'
import { tableToArray } from '../../../utils/helpers.js'
import * as dom from '../../../utils/dom.js'

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
