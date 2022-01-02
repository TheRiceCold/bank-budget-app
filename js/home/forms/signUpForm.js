import FormHTML from '../html/FormHTML.js'

const inputList = [
  {
    id: 'fullname',
    name: 'fullname',
    placeHolder: 'Fullname',
    icon: 'fas fa-user'
  },
  {
    id: 'email',
    name: 'email',
    placeHolder: 'Email',
    icon: 'fas fa-envelope'
  },
  {
    id: 'mobile',
    name: 'mobile',
    placeHolder: 'Mobile No.',
    icon: 'fas fa-phone'
  },
  {
    id: 'password',
    name: 'password',
    placeHolder: 'Password',
    icon: 'fas fa-lock',
    type: 'password'
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    placeHolder: 'Confirm Password',
    icon: 'fas fa-lock',
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
