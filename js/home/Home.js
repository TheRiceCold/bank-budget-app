import { removeAllChild } from '../utils/helpers.js'
import { togglePassword } from '../utils/helpers.js'
import { login } from './login/login.js'
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
    login()
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
}

export default Home
