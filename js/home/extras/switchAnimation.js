import * as DOM from '../../utils/dom.js'

const mode = e => {
  const container = DOM.get('#loginPage')

  if (e.target.id === 'signUpSwitch')
    DOM.addClass(container, 'sign-up-mode')
  else 
    DOM.delClass(container, 'sign-up-mode')
}

const switchAnim = () => {
  const signUp = DOM.get('#signUpSwitch')
  const signIn = DOM.get('#signInSwitch')
  signUp.onclick = mode
  signIn.onclick = mode
}

export { switchAnim }
