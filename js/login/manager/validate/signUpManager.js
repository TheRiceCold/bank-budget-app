import * as dom from '../../../utils/dom.js'
import { isValid } from './validate.js'

const regex = {
  fullname: /^[a-z\d]{5,12}$/i,
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  mobile: /^(09|639)\d{9}$/
}

const inputsCallback = e => {
  const inputField = e.target
  const inputName = inputField.attributes.name.value
  isValid(inputField, regex[inputName])
}

const accountExist = () => {

}

const formCallback = e => {
  e.preventDefault()
  const form = e.target

  const fullname = form.fullname
  const email = form.email
  const mobile = form.mobile
  const password = form.password
  const confirmPassword = form.confirmPassword
  
  const accounts = 
    localStorage.accounts ?
    JSON.parse(localStorage.accounts) :
    []

  console.log(accounts)

  if (isValid(fullname) && 
      isValid(email) &&
      isValid(mobile) && 
      isValid(password) &&
      isValid(confirmPassword) === isValid(password)) {
        console.log('Registered!')
        accounts.push({
          fullname: fullname.value,
          email: email.value,
          mobile: mobile.value,
          password: password.value
        })
        localStorage.accounts = JSON.stringify(accounts)
  }
}

const signUpManager = () => {
  const form = dom.get('#signUpForm')
  const inputs = form.querySelectorAll('input')

  inputs.forEach(input => input.addEventListener('keyup', inputsCallback))
  form.addEventListener('submit', formCallback)
}

export { signUpManager }
