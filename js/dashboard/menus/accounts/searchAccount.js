import { searchTable } from '../../../utils/searchTable.js'
import { tableToArray } from '../../../utils/helpers.js'
import * as dom from '../../../utils/dom.js'

const searchAccount = () => {
  const table = dom.get('#accountsMenu table')
  const tableData = tableToArray(table)
  const searchInput = dom.get('#searchInput')

  searchInput.addEventListener('keyup', e => {
    const term = e.target.value
    searchTable(tableData, term)
  })
}

export { searchAccount }
