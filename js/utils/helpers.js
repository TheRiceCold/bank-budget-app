import * as DOM from './dom.js'
import { loggedAccount } from './storage.js'

const removeAllChild = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const updateBalance = textElement => {
  const balance = '₱' + loggedAccount.balance
  textElement.innerText = balance
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

export { removeAllChild, copyText, updateBalance }
