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

const content = {
  className: 'sign-up-form',
  id: 'signUpForm',
  title: 'Sign Up'
}

const signUpForm = new FormHTML(content)
signUpForm.inputList = inputList
export { signUpForm }
