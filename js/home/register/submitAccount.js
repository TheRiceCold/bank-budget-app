import * as dom from '../../utils/dom.js'
import { addAccount } from './addAccount.js'

const callback = e => {
  e.preventDefault()

  const accounts = localStorage.accounts 
    ? JSON.parse(localStorage.accounts) : []

  const form = e.target
  addAccount(form, accounts)
}

const submitAccount = () => {
  const form = dom.get('#signUpForm')
  form.addEventListener('submit', callback)   
}

export { submitAccount }
