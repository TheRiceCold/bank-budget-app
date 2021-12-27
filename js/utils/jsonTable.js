const jsonTable = (data, container) => { 
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

export { jsonTable }
