import FormHTML from '../../html/FormHTML.js'

const inputList = [
  {
    id: 'fullname',
    placeHolder: 'Fullname',
    icon: 'user'
  },
  {
    id: 'email',
    placeHolder: 'Email',
    icon: 'envelope'
  },
  {
    id: 'phone',
    placeHolder: 'Phone Number',
    icon: 'phone'
  },
  {
    id: 'password',
    placeHolder: 'Password',
    icon: 'lock',
    type: 'password'
  },
  {
    id: 'confirmPassword',
    placeHolder: 'Confirm Password',
    icon: 'lock',
    type: 'password'
  }
]

const SignUpForm = new FormHTML('sign-up-form', 'signUpForm', 'Sign Up')
SignUpForm.setInputList(inputList)

export default SignUpForm.asString()
