import { dashboardManager } from '../../dashboard/dashboardManager.js'
import { dashboard } from '../../dashboard/dashboardPage.js'
import { removeAllChild } from '../../utils/helpers.js'
import { getAccount } from './findAccount.js'
import * as DOM from '../../utils/dom.js'

const callback = e => {
  e.preventDefault()
  const form = e.target

  if (getAccount(form)) {
    localStorage.loggedAccount = JSON.stringify(getAccount(form))
    removeAllChild(DOM.root)
    DOM.root.append(dashboard)
    dashboardManager()
  }
}

const login = () => 
  DOM.get('#signInForm')
    .addEventListener('submit', callback)

export { login }
