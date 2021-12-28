import { getValidValue } from './validate.js'
import * as DOM from '../../utils/dom.js'
import { regexList } from './regex.js'

const confirmPassword = () => {
  const password = DOM.get('#signUpForm input[name="password"]')
  const confirmPassword = DOM.get('#signUpForm input[name="confirmPassword"]')

  confirmPassword.addEventListener('keyup', () => {
    if (password.value !== confirmPassword.value)
      getValidValue(confirmPassword, 'condition', 'password does not match')
  })
}

const findEmail = () => {
  const email = DOM.get('#signUpForm input[name="email"]')
  const accounts = JSON.parse(localStorage.accounts)
  const checkEmail = accounts.find(account => account.email === email.value)

  if (checkEmail) 
    getValidValue(email, 'condition', 'Email already exist')
}

const callback = (e, i) => {
  const inputField = e.target
  const inputName = inputField.attributes.name.value
  const regex = regexList[i].regex
  const message = regexList[i].message
  getValidValue(inputField, regex, message)
  findEmail()
  confirmPassword()
}

const typingCheck = () => {
  const inputs = DOM.getAll('#signUpForm input')
  for (let i = 0; i < inputs.length; i++)
    inputs[i].addEventListener('keyup', e => callback(e, i))
}

export { typingCheck }
