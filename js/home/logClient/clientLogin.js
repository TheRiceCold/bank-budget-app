import { setLoggedUser } from '../../storage/control.js'
import Dashboard from '../../dashboard/Dashboard.js'
import { findClient } from './findClient.js'
import * as DOM from '../../utils/dom.js'

const callback = e => {
  e.preventDefault()
  const form = e.target
  const user = findClient(form)

  if (user) {
    setLoggedUser(user)
    const dashboard = new Dashboard()
    dashboard.render()
  } 
  else
    alert('admin not found')
}

const clientLogin = () => { 
  const form =  DOM.get('#clientSignInForm')
  form.onsubmit = callback
}

export { clientLogin }
