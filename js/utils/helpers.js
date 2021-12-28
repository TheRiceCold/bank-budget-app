const removeAllChild = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const copyText = e => {
  const textCopy = e.target.textContent
  const copyInput = document.createElement('input')
  console.log('hey')

  e.target.classList.toggle('copied')

  copyInput.value = textCopy
  document.body.append(copyInput)
  copyInput.select()
  document.execCommand('copy')
  copyInput.remove()
}

const tableToArray = table => {
  const searchData = []
  const rowList = Array.from(table.children[1].children)

  rowList.forEach(row => {
    const datas = Array.from(row.children)
    const terms = datas.map(cell => cell.textContent) 
    searchData.push(terms)
  })

  return searchData
}
export { removeAllChild, copyText, tableToArray }
