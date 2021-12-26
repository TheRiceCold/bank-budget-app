import { getQuery } from '../../utils/dom.js'

const mode = e => {
  const container = getQuery('#loginPage')

  if (e.target.id === 'signUpSwitch')
    container.classList.add('sign-up-mode')
  else 
    container.classList.remove('sign-up-mode')
}

export const switchAnim = () => {
  getQuery('#signUpSwitch').addEventListener('click', mode)
  getQuery('#signInSwitch').addEventListener('click', mode)
}
