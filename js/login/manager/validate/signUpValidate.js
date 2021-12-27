import * as dom from '../../../utils/dom.js'
import * as validate from './validate.js'

const name = form => {
  const input = form.fullname
  const checkName = input.value.trim() === ''
  const nameErrMessage = 'Name cannot be blank'
  validate.checkInput(input, checkName, nameErrMessage)
}

const email = form => {
  const input = form.email
  const checkEmail =
      input.value.trim === '' ||
      !validate.isEmail(input.value.trim()) 
  const emailErrMessage = 'Email is not valid'
  validate.checkInput(input, checkEmail, emailErrMessage)
}

const phone = form => {
  const input = form.phone
  const checkName = input.value.trim() === ''
  const nameErrMessage = 'Phone Number not valid'
  validate.checkInput(input, checkName, nameErrMessage)
}

const password = form => {
  const input = form.password
  const checkName = input.value.trim() === ''
  const nameErrMessage = 'Password cannot be blank'
  validate.checkInput(input, checkName, nameErrMessage)
}

const confirmPassword = form => {
  const input = form.confirmPassword
  const checkName = input.value.trim() === ''
  const nameErrMessage = 'Confirm Password cannot be blank'
  validate.checkInput(input, checkName, nameErrMessage)
}

const signUpValidate = form => {
  name(form)
  email(form)
  phone(form)
  password(form)
  confirmPassword(form)
}

export { signUpValidate }
