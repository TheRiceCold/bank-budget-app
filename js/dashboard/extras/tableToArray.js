const tableToArray = table => {
  const rowList = Array.from(table.children[1].children)
  const searchData = rowList.map(row => {
    const datas = Array.from(row.children)
    return datas.map(cell => cell.innerText) 
  })
  return searchData
}

export { tableToArray }
