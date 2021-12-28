import * as dom from '../../../utils/dom.js'

const emailOrPhone = form => {
  const input = form.emailOrPhone
  const condition = !isEmail(input.value) && !isPhNumber(input.value)
  const message = 'invalid: email or phone number(09) or (+639)'
  const elseMessage = 'user not registered'
  checkInput(input, condition, message, elseMessage)
}

const password = form => {
  const input = form.password
  //checkInput(input)
}

const signInValidate = form => {
  //emailOrPhone(form) 
  //password(form)
}

export { signInValidate }
