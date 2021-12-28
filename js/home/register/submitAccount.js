import { registerValidate } from './registerValidate.js'
import * as dom from '../../utils/dom.js'

const callback = e => {
  e.preventDefault()

  const accounts = localStorage.accounts 
    ? JSON.parse(localStorage.accounts) : []

  const form = e.target
  registerValidate(form, accounts)
}

const submitAccount = () => {
  const form = dom.get('#signUpForm')
  form.addEventListener('submit', callback)   
}

export { submitAccount }
