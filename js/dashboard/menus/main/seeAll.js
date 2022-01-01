import * as DOM from '../../../utils/dom.js'

const goto = () => {
  const link = DOM.get('.sidebar #accountsLink')
  link.click()
}

export const seeAll = () => {
  const btn = DOM.get('#newAccounts a')
  btn.onclick = goto
}
