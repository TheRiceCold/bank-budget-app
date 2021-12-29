import { copyText } from './helpers.js'
import * as dom from './dom.js'

const jsonTable = (data, container) => { 
  const table = dom.create('table')
  const thead = table.createTHead()
  const col = Object.keys(data[0])

  let tr = dom.create('tr')                  
  col.forEach(i => tr.innerHTML += '<th>'+i+'</th>')
  thead.append(tr)

  for (let i = 0; i < data.length; i++) {
    let row = dom.create('tr')
    for (let j = 0; j < col.length; j++) {
      const cell = row.insertCell(-1)
      cell.textContent = data[i][col[j]]
      //cell.addEventListener('click', copyText)
    }
    table.append(row)
  }

  return table
}

export { jsonTable }
