import { setLoggedAdmin } from '../../storage/adminStorage.js'
import { removeAllChild } from '../../utils/helpers.js'
import Dashboard from '../../dashboard/Dashboard.js'
import * as DOM from '../../utils/dom.js'
import { getAdmin } from './findUser.js'

const callback = e => {
  e.preventDefault()
  const form = e.target
  const admin = getAdmin(form)

  if (admin) {
    setLoggedAdmin(admin)
    const dashboard = new Dashboard()
    dashboard.render()
  } 
  else
    alert('user not found')
}

const login = () => { 
  const form =  DOM.get('#adminForm')
  form.onsubmit = callback
}

export { login }
