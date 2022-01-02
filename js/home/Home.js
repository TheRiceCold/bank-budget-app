import { removeAllChild } from '../utils/helpers.js'
import { register } from './register/register.js'
import { login } from './login/login.js'
import { forms } from './forms/forms.js'
import MyHTML from '../utils/MyHTML.js'
import * as DOM from '../utils/dom.js'
import { panels } from './panels.js'

class Home extends MyHTML {
  constructor() {
    const id = 'loginPage'
    const content = [forms, panels]
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

    register()
    login()
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
