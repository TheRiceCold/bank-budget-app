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

const SignInForm = new FormHTML('sign-in-form', 'signInForm', 'Sign In') 
SignInForm.inputList = inputList

export default SignInForm.string
