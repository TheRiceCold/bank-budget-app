import FormHTML from '../../html/FormHTML.js'

const inputList = [
  {
    id: 'usernameOrEmail',
    placeHolder: 'Username/Email', 
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
SignInForm.setInputList(inputList)

export default SignInForm.asString()
