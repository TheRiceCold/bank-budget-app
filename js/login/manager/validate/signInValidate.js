import * as dom from '../../../utils/dom.js'
import * as validate from './validate.js'

const emailOrPhone = form => {
  const input = form.emailOrPhone
  const checkEmail =
      input.value.trim === '' ||
      !validate.isEmail(input.value.trim()) 
  const emailErrMessage = 'Email is not valid'
  validate.checkInput(input, checkEmail, emailErrMessage)
}

const password = form => {
  const input = form.password
  const checkName = input.value.trim() === ''
  const nameErrMessage = 'Password cannot be blank'
  validate.checkInput(input, checkName, nameErrMessage)
}

const signInValidate = form => {
  emailOrPhone(form)
  password(form)
}

export { signInValidate }
