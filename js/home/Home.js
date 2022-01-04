import { clientLogin } from './logClient/clientLogin.js'
import { adminLogin } from './logAdmin/adminLogin.js'
import { removeAllChild } from '../utils/helpers.js'
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
    const callback = this.toggleCallback
    const mode = this.mode

    this.togglePassword(callback)
    this.switchAnim(mode)

    adminLogin()
    clientLogin()
  }

  togglePassword(callback) {
    const eyeIcons = DOM.getAll('input[type="password"] + #eye')
    eyeIcons.forEach(icon => icon.onclick = callback)
  }

  toggleCallback(e) {
    const icon = e.target
    const input = icon.parentElement.querySelector('input')

    if (icon.classList.contains('fa-eye')) {
      input.setAttribute('type', 'text')
      DOM.changeClass(icon, 'fa-eye', 'fa-eye-slash')
    } else {
      input.setAttribute('type', 'password')
      DOM.changeClass(icon, 'fa-eye-slash', 'fa-eye')
    }
  }

  switchAnim(mode) {
    const signUp = DOM.get('#signUpSwitch')
    const signIn = DOM.get('#signInSwitch')
    signUp.onclick = mode
    signIn.onclick = mode
  }

  mode(e) {
    const container = DOM.get('#loginPage')
    if (e.target.id === 'signUpSwitch')
      DOM.addClass(container, 'sign-up-mode')
    else 
      DOM.delClass(container, 'sign-up-mode')
  }
}

export default Home
