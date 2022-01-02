import { removeAllChild } from '../../../utils/helpers.js'
import * as DOM from '../../../utils/dom.js'

const findTerm = (tableData, term) => {
  term = term.toLowerCase()

  if (!term) return tableData

  return tableData.filter(row => 
    row.find(item => 
      item.toLowerCase().includes(term)))
}

const createTable = (tbody, data) => {
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

const searchTable = (tableData, term) => {
  const menu = '#accountsMenu '
  const data = findTerm(tableData, term)
  const tbody = DOM.get(menu + 'tbody')

  removeAllChild(tbody)
  createTable(tbody, data)  
}

export { searchTable }
