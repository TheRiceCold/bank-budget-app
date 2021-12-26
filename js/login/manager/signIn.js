import { changeMenu } from '../../utils/global.js'
import { getQuery, root } from '../../utils/dom.js'
import { removeAllChildNodes } from '../../utils/helpers.js'
import DashboardPage from '../../dashboard/dashboardPage.js'

const callback = e => {
  e.preventDefault()
  removeAllChildNodes(root)
  root.append(DashboardPage)
  changeMenu()
}

export const signIn = () => 
  getQuery('#signInForm')
    .addEventListener('submit', callback)
