import Form from './Form.js'

const inputList = [
  {
    id: 'username',
    placeHolder: 'Username',
    icon: 'user',
  },
  {
    id: 'email',
    placeHolder: 'Email',
    icon: 'envelope',
  },
  {
    id: 'password',
    placeHolder: 'Password',
    icon: 'lock',
    type: 'password',
  },
  {
    id: 'confirmPassword',
    placeHolder: 'Confirm Password',
    icon: 'lock',
    type: 'password'
  }
]

const SignUpForm = new Form('sign-up-form', 'signupform', 'Sign Up')
SignUpForm.setInputList(inputList)

export default SignUpForm
