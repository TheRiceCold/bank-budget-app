import { getStoredAccounts } from '../storage/accountStorage.js'
import { setLoggedAccount } from '../storage/accountStorage.js'
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
    const adminList = getStoredAdmins()
    const admin = this.getUser(form, adminList)

    if (admin) {
      setLoggedAdmin(admin)
      const dashboard = new Dashboard()
      dashboard.render()
    } 
    else
      alert('user not found')
  }

  loginAccount() {
    const form = DOM.get('#userForm')
    form.onsubmit = e => this.loginAccountCallback(e)
  }

  loginAccountCallback(e) {
    e.preventDefault()
    const form = e.target
    const accountList = getStoredAccounts()
    const account = this.getUser(form, accountList, false)

    if (account) {
      setLoggedAccount(account)
      const budgetApp = new BudgetApp()
      budgetApp.render()
    } else
      alert('user not found')
  }

  getUser(form, list, isAdmin = true) {
    let username, email
    if (isAdmin)
      username = form.username
    else
      email = form.email

    const password = form.password 

    const found = list.find(user => {
      const decryptPassword = atob(user.password)
      let foundUsername, foundEmail
      const foundPassword = decryptPassword === password.value
      let foundUser = false

      if (isAdmin) {
        foundUsername = user.username === username.value
        foundUser = foundUsername && foundPassword
      }
      else {
        foundEmail = user.email === email.value
        foundUser = foundEmail && foundPassword
      }

      if (foundUser) return user
    })
    return found
  }
}

export default Home
