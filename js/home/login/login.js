import * as dom from '../../utils/dom.js'
import { findAccount } from './findAccount.js'
import { removeAllChild } from '../../utils/helpers.js'
import { dashboard } from '../../dashboard/dashboard.js'
import { dashboardManager } from '../../dashboard/manager/manager.js'

const callback = e => {
  e.preventDefault()
  const form = e.target

  if (findAccount(form))
    console.log('found!')
  else 
    console.log('not found!')

  //if (findAccount(form)) {
    //localStorage.isLoggedIn = true

    //removeAllChild(dom.root)
    //dom.root.append(dashboard)
    //dashboardManager()
  //}
}

const login = () => 
  dom.get('#signInForm')
    .addEventListener('submit', callback)

export { login }
