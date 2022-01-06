import { getStoredAdmins } from '../storage/adminStorage.js'
import { setLoggedAdmin } from '../storage/adminStorage.js'
import { removeAllChild } from '../utils/helpers.js'
import { togglePassword } from '../utils/helpers.js'
import Dashboard from '../dashboard/Dashboard.js'
import BudgetApp from '../budgetApp/BudgetApp.js'
import MyHTML from '../utils/MyHTML.js'
import { content } from './content.js'
import * as DOM from '../utils/dom.js'

class Home extends MyHTML {
  constructor() {
    const id = 'loginPage'
    super({ id: id, inner: content })
  }

  render() {
    removeAllChild(DOM.root)
    DOM.root.append(this.html)
    this.manager()
  }

  manager() {
    togglePassword()
    this.switchAnim()
    this.loginAdmin()
    this.loginAccount()
  }
  
  switchAnim() {
    const adminMode = DOM.get('#adminSwitch')
    const userMode = DOM.get('#userSwitch')
    adminMode.onclick = this.modeSwitch
    userMode.onclick = this.modeSwitch
  }

  modeSwitch(e) {
    const container = DOM.get('#loginPage')
    if (e.target.id === 'adminSwitch')
      DOM.addClass(container, 'admin-mode')
    else 
      DOM.delClass(container, 'admin-mode')
  }

  loginAdmin() { 
    const form =  DOM.get('#adminForm')
    form.onsubmit = e => this.loginAdminCallback(e)
  }

  loginAdminCallback(e) {
    e.preventDefault()
    const form = e.target
    const admin = this.getAdmin(form)

    if (admin) {
      setLoggedAdmin(admin)
      const dashboard = new Dashboard()
      dashboard.render()
    } 
    else
      alert('user not found')
  }

  getAdmin(form) {
    const users = getStoredAdmins()

    const username = form.username
    const password = form.password 

    const found = users.find(user => {
      const decryptPassword = atob(user.password)

      const foundEmail = user.username === username.value
      const foundPassword = decryptPassword === password.value
      const foundUser = foundEmail && foundPassword

      if (foundUser) return user
    })
    return found
  }
  
  loginAccount() {
    const form = DOM.get('#userForm')
    form.onsubmit = e => this.loginAccountCallback(e)
  }

  loginAccountCallback(e) {
    e.preventDefault()
    const budgetApp = new BudgetApp()
    budgetApp.render()
  }
}

export default Home
