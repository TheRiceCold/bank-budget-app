import { removeAllChild } from '../../../utils/helpers.js'
import * as dom from '../../../utils/dom.js'

const findTerm = (tableData, term) => {
  term = term.toLowerCase()

  if (!term) return tableData

  return tableData.filter(row => 
    row.find(item => 
      item.toLowerCase().includes(term)))
}

const createTable = (tbody, data) => {
  data.forEach(row => {
    const curRow = dom.create('tr')
    row.forEach(item => {
      const curCell = dom.create('td')
      curCell.textContent = item
      curRow.append(curCell)
    })
    tbody.append(curRow)
  })
}

const searchTable = (tableData, term) => {
  const data = findTerm(tableData, term)
  const tbody = dom.get('#accountsMenu tbody')

  removeAllChild(tbody)
  createTable(tbody, data)  
}

export { searchTable }
