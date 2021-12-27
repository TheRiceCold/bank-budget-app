import * as DOM from '../../utils/dom.js'

const mode = e => {
  const container = DOM.get('#loginPage')

  if (e.target.id === 'signUpSwitch')
    DOM.addClass(container, 'sign-up-mode')
  else 
    DOM.subClass(container, 'sign-up-mode')
}

export const switchAnim = () => {
  DOM.click('#signUpSwitch', mode)
  DOM.click('#signInSwitch', mode)
}
