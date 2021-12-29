import { submitValidate } from './submitValidate.js'
import { typingCheck } from './typingCheck.js'
import { getValidValue } from './validate.js'
import * as DOM from '../../utils/dom.js'

const registration = () => {
  typingCheck()

  const form = DOM.get('#signUpForm')
  form.addEventListener('submit', submitValidate)   
}

export { registration }
