import FormHTML from '../html/FormHTML.js'

const inputList = [
  {
    id: 'emailOrPhone',
    placeHolder: 'Email/Phone Number', 
    icon: 'user'
  },
  {
    id: 'password',
    placeHolder: 'Password',
    icon: 'lock',
    type: 'password'
  }
]

const signInForm = new FormHTML('sign-in-form', 'signInForm', 'Sign In') 
signInForm.inputList = inputList

export { signInForm }
