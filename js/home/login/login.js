import { setLoggedAccount } from '../../utils/storage.js'
import { removeAllChild } from '../../utils/helpers.js'
import Dashboard from '../../dashboard/Dashboard.js'
import { getFindAccount } from './findAccount.js'
import * as DOM from '../../utils/dom.js'

const callback = e => {
  e.preventDefault()
  const form = e.target
  const user = getFindAccount(form)

  if (user) {
    setLoggedAccount(user)
    const dashboard = new Dashboard()
    dashboard.render()
  } 
  else
    alert('account not found')
}

const login = () => { 
  const form =  DOM.get('#signInForm')
  form.onsubmit = callback
}

export { login }
