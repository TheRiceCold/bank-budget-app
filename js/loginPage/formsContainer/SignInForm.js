import Form from './Form.js'

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

const SignInForm = new Form('sign-in-form', 'signinform', 'Sign In') 
SignInForm.setInputList(inputList)

export default SignInForm
