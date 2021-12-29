import { pushAccount } from './pushAccount.js'
import { getValidValue } from './validate.js'

const validate = (form, accounts) => {
  const fullname = form.fullname
  const password = form.password
  const email = form.email
  const mobile = form.mobile
  const confirmPassword = form.confirmPassword

  if (getValidValue(fullname)
    && getValidValue(email)
    && getValidValue(mobile)
    && getValidValue(password)
    && getValidValue(confirmPassword) === getValidValue(password)) {
      pushAccount(form, accounts)
      console.log('Registered!')
  } else 
    console.log('INVALID!')
}

const submit = e => {
  e.preventDefault()


  const accounts = localStorage.accounts 
    ? JSON.parse(localStorage.accounts) : []

  const form = e.target
  validate(form, accounts)
}


export { submit as submitValidate }
