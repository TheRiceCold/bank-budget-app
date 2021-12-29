import { dashboardManager } from '../../dashboard/dashboardManager.js'
import { dashboard } from '../../dashboard/dashboard.js'
import { removeAllChild } from '../../utils/helpers.js'
import { findAccount } from './findAccount.js'
import * as DOM from '../../utils/dom.js'

const callback = e => {
  e.preventDefault()
  const form = e.target

  if (findAccount(form)) {
    removeAllChild(DOM.root)
    DOM.root.append(dashboard)
    dashboardManager()
  }
}

const login = () => 
  DOM.get('#signInForm')
    .addEventListener('submit', callback)

export { login }
