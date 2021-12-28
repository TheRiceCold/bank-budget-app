import * as dom from '../../utils/dom.js'
import { removeAllChild } from '../../utils/helpers.js'
import { dashboard } from '../../dashboard/dashboard.js'
import { dashboardManager } from '../../dashboard/manager/manager.js'
import { signInValidate } from './validate/signInValidate.js'

const callback = e => {
  e.preventDefault()

  if (signInValidate(e.target)) {
    localStorage.isLoggedIn = true

    removeAllChild(dom.root)
    dom.root.append(dashboard)
    dashboardManager()
  }
}

export const signIn = () => 
  dom.get('#signInForm')
    .addEventListener('submit', callback)
