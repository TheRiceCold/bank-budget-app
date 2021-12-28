import * as DOM from '../../utils/dom.js'

const mode = e => {
  const container = DOM.get('#loginPage')

  if (e.target.id === 'signUpSwitch')
    DOM.addClass(container, 'sign-up-mode')
  else 
    DOM.delClass(container, 'sign-up-mode')
}

export const switchAnim = () => {
  const signUp = DOM.get('#signUpSwitch')
  const signIn = DOM.get('#signInSwitch')
  DOM.click(signUp, mode)
  DOM.click(signIn, mode)
}
