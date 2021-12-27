export const removeAllChild = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export function getTableData(query) {
  const searchData = []
  const table = document.querySelector(query)
  Array.from(table.children[1].children)
    .forEach(bodyRowEl =>
      searchData.push(Array.from(bodyRowEl.children)
        .map(cellEl => cellEl.innerHTML)))
  return searchData
}

export function searchTable(table, term) {
  if (!term) 
    return table

  return table.filter(row => 
    row.find(item => 
      item.toLowerCase().includes(term.toLowerCase())))
}

export function refreshTable(data) {
  const tableBody = document.querySelector('#accountsMenu tbody')
  tableBody.innerHTML = ''

  data.forEach(row => {
    const curRow = document.createElement('tr')
    row.forEach(dataItem => {
      const curCell = document.createElement('td')
      curCell.innerText = dataItem
      curRow.append(curCell)
    })
    tableBody.append(curRow)
  })
}
