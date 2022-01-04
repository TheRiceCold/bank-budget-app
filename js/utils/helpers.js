import * as DOM from './dom.js'

const removeAllChild = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const copyText = e => {
  const textCopy = e.target.textContent
  const copyInput = DOM.create('input')

  e.target.classList.toggle('copied')

  copyInput.value = textCopy
  DOM.root.append(copyInput)
  copyInput.select()
  DOM.root.execCommand('copy')
  copyInput.remove()
}

export { removeAllChild, copyText }
