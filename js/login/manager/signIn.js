import * as dom from '../../utils/dom.js'
import { removeAllChild } from '../../utils/helpers.js'
import { dashboard } from '../../dashboard/dashboard.js'
import { sidebarEvents } from '../../dashboard/manager/changeMenu.js'
import { signInValidate } from './validate/signInValidate.js'

const callback = e => {
  e.preventDefault()
  signInValidate(e.target)
  //removeAllChild(dom.root)
  //dom.root.append(dashboard)
  //sidebarEvents()
}

export const signIn = () => 
  dom.get('#signInForm')
    .addEventListener('submit', callback)
