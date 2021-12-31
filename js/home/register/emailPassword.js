import { getStoredAccounts } from '../../utils/storage.js'
import { getValidInput } from './validInput.js'

const confirmPassword = form => {
  const password = form.password
  const confirmPassword = form.confirmPassword

  confirmPassword.addEventListener('keyup', () => {
    if (password.value !== confirmPassword.value)
      getValidInput(confirmPassword, 'condition', 'password does not match')
  })
}

const findEmail = form => {
  const email = form.email
  const accounts = getStoredAccounts()
  const checkEmail = accounts.find(account => account.email === email.value)

  if (checkEmail) 
    getValidInput(email, 'condition', 'Email already exist')
}

export { confirmPassword, findEmail }
