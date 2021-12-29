import { getValidValue } from './validate.js'
import * as DOM from '../../utils/dom.js'
import { regexList } from './regex.js'

const confirmPassword = form => {
  const password = form.password
  const confirmPassword = form.confirmPassword

  confirmPassword.addEventListener('keyup', () => {
    if (password.value !== confirmPassword.value)
      getValidValue(confirmPassword, 'condition', 'password does not match')
  })
}

const findEmail = form => {
  const email = form.email
  const accounts = JSON.parse(localStorage.accounts)
  const checkEmail = accounts.find(account => account.email === email.value)

  if (checkEmail) 
    getValidValue(email, 'condition', 'Email already exist')
}

const callback = (e, i) => {
  const form = DOM.get('#signUpForm')
  const inputField = e.target
  const inputName = inputField.attributes.name.value

  findEmail(form)
  confirmPassword(form)

  const regex = regexList[i].regex
  const message = regexList[i].message
  getValidValue(inputField, regex, message)
}

const typingCheck = () => {
  const inputs = DOM.getAll('#signUpForm input')
  for (let i = 0; i < inputs.length; i++)
    inputs[i].addEventListener('keyup', e => callback(e, i))
}

export { typingCheck }
