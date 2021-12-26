import { getQuery } from '../../utils/dom.js'
import { validate, isEmail } from './validate.js'

const nameValidation = () => {
  const name = signUpForm.fullname
  const checkName = name.value.trim() === ''
  const nameErrMessage = 'Name cannot be blank'
  validate( name, checkName, nameErrMessage )
}


const callback = e => {
  e.preventDefault()
  
  nameValidation()
  
  const email = signUpForm.email
  const checkEmail =
      email.value.trim === '' ||
      !isEmail(email.value.trim()) 
  const emailErrMessage = 'Email is not valid'
  validate( email, checkEmail, emailErrMessage )
}

export const signUp = () =>
  getQuery('#signUpForm')
    .addEventListener('submit', callback)
