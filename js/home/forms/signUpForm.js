import FormHTML from '../html/FormHTML.js'

const inputList = [
  {
    id: 'fullname',
    name: 'fullname',
    placeHolder: 'Fullname',
    icon: 'user'
  },
  {
    id: 'email',
    name: 'email',
    placeHolder: 'Email',
    icon: 'envelope'
  },
  {
    id: 'mobile',
    name: 'mobile',
    placeHolder: 'Mobile No.',
    icon: 'phone'
  },
  {
    id: 'password',
    name: 'password',
    placeHolder: 'Password',
    icon: 'lock',
    type: 'password'
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    placeHolder: 'Confirm Password',
    icon: 'lock',
    type: 'password'
  }
]

const signUpForm = new FormHTML('sign-up-form', 'signUpForm', 'Sign Up')
signUpForm.inputList = inputList
export { signUpForm }
