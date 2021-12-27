import { getQuery, root } from '../../utils/dom.js'
import { removeAllChild } from '../../utils/helpers.js'
import { dashboard } from '../../dashboard/dashboard.js'
import { changeMenu } from '../../dashboard/manager/changeMenu.js'

const callback = e => {
  e.preventDefault()
  removeAllChild(root)
  root.append(dashboard)
  changeMenu()
}

export const signIn = () => 
  getQuery('#signInForm')
    .addEventListener('submit', callback)
