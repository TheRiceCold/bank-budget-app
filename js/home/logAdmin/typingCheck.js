import { confirmPassword } from './emailPassword.js'
import { getValidInput } from './validInput.js'
import { findEmail } from './emailPassword.js'
import { regexList } from './regexList.js'
import * as DOM from '../../utils/dom.js'

const callback = (e, i) => {
  const form = DOM.get('#signUpForm')
  const inputField = e.target

  findEmail(form)
  confirmPassword(form)

  const regex = regexList[i].regex
  const message = regexList[i].message
  getValidInput(inputField, regex, message)
}

const typingCheck = () => {
  const inputs = DOM.getAll('#signUpForm input')
  for (let i = 0; i < inputs.length; i++)
    inputs[i].addEventListener('keyup', e => callback(e, i))
}

export { typingCheck }
