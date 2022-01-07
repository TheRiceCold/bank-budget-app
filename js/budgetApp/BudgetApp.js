import { getLoggedAccount } from '../storage/accountStorage.js'
import { logoutAccount } from '../storage/accountStorage.js'
import { removeAllChild } from '../utils/helpers.js'
import MyHTML from '../utils/MyHTML.js'
import { content } from './content.js'
import * as DOM from '../utils/dom.js'

class BudgetApp extends MyHTML {
  constructor() {
    super({ tag: 'main', id: 'budgetApp', inner: content })
  }

  render() {
    removeAllChild(DOM.root)
    DOM.root.append(this.html)
    this.manager()
  }

  manager() {
    const balance = getLoggedAccount().balance
    const appId = '#budgetApp '
    const balanceTxt = DOM.get(appId+'#balance')
    balanceTxt.innerText = balance
    this.logout() 
  }
  
  logout() {
    const appId = '#budgetApp '
    const logoutBtn = DOM.get(appId+'#logoutBtn')
    logoutBtn.onclick = () => logoutAccount() 
  }
}

export default BudgetApp
