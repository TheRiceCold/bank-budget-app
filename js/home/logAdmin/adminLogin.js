import { setLoggedAdmin } from '../../storage/admins.js'
import Dashboard from '../../dashboard/Dashboard.js'
import { findAdmin } from './findAdmin.js'
import * as DOM from '../../utils/dom.js'

const callback = e => {
  e.preventDefault()
  const form = e.target
  const admin = findAdmin(form)

  if (admin) {
    setLoggedAdmin(admin)
    const dashboard = new Dashboard()
    dashboard.render()
  } 
  else
    alert('user not found')
}

const adminLogin = () => { 
  const form =  DOM.get('#adminSignInForm')
  form.onsubmit = callback
}

export { adminLogin }
