import * as dom from '../../utils/dom.js'
import { regex } from './regex.js'
import { getValidValue } from './validate.js'

const callback = e => {
  const inputField = e.target
  const inputName = inputField.attributes.name.value
  getValidValue(inputField, regex[inputName])
}

const inputCheck = () => {
  const inputs = dom.getAll('#signUpForm input')
  inputs.forEach(input => input.addEventListener('keyup', callback))
}

export { inputCheck }
