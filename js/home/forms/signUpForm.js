import FormHTML from '../html/FormHTML.js'

const inputList = [
  {
    id: 'username',
    placeHolder: 'Username',
    icon: 'fas fa-user'
  },
  {
    id: 'password',
    placeHolder: 'Password',
    icon: 'fas fa-user-lock',
    type: 'password'
  }
]

const content = {
  className: 'sign-up-form',
  id: 'adminSignInForm',
  title: 'Admin'
}

const signUpForm = new FormHTML(content)
signUpForm.inputList = inputList
export { signUpForm }
