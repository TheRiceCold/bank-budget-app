import { setLoggedUser } from '../../storage/adminStorage.js'
import { removeAllChild } from '../../utils/helpers.js'
import Dashboard from '../../dashboard/Dashboard.js'
import * as DOM from '../../utils/dom.js'
import { getUser } from './findUser.js'

const callback = e => {
  e.preventDefault()
  const form = e.target
  const user = getUser(form)

  if (user) {
    setLoggedUser(user)
    const dashboard = new Dashboard()
    dashboard.render()
  } 
  else
    alert('user not found')
}

const login = () => { 
  const form =  DOM.get('#signInForm')
  form.onsubmit = callback
}

export { login }
