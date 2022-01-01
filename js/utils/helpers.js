import * as DOM from './dom.js'
import { loggedAccount } from './storage.js'

const removeAllChild = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const currentDate = () => {
  let today = new Date().toISOString().split('T')[0]
  const date = DOM.get('header input[type="date"]')
  date.value = today
}

const showName = () => {
  const name = loggedAccount.fullname || ''
  const firstName = name.substring(0, name.indexOf(' '))

  const nameTxt = DOM.get('#accountName')
  nameTxt.innerText = 'Hello ' + firstName
}

const copyText = e => {
  const textCopy = e.target.textContent
  const copyInput = document.createElement('input')

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

export { removeAllChild, copyText, tableToArray, currentDate, showName }
