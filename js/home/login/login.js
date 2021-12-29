import * as DOM from '../../utils/dom.js'
import { findAccount } from './findAccount.js'
import { removeAllChild } from '../../utils/helpers.js'
import { dashboard } from '../../dashboard/dashboard.js'
import { dashboardManager } from '../../dashboard/dashboardManager.js'

const callback = e => {
  e.preventDefault()
  const form = e.target

  if (findAccount(form)) {
    removeAllChild(DOM.root)
    DOM.root.append(dashboard)
    dashboardManager()
  }
  else alert('account does not exist!')
}

const login = () => 
  DOM.get('#signInForm')
    .addEventListener('submit', callback)

export { login }
