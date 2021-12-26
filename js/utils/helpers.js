export const removeAllChildNodes = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export const jsonToTable = (data, container) => { 
  const table = document.createElement("table")
  const thead = table.createTHead()
  const col = Object.keys(data[0])
  let tr = document.createElement('tr')                  
  col.forEach(i => tr.innerHTML += '<th>'+i+'</th>')
  thead.append(tr)

  for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr')
    for (let j = 0; j < col.length; j++) {
      let tabCell = row.insertCell(-1)
      tabCell.innerHTML = data[i][col[j]]
    }
    table.append(row)
  }

  return table
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
