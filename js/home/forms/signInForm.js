import FormHTML from '../html/FormHTML.js'

const inputList = [
  {
    id: 'email',
    placeHolder: 'Email', 
    icon: 'fas fa-envelope'
  },
  {
    id: 'password',
    placeHolder: 'Password',
    icon: 'fas fa-lock',
    type: 'password'
  }
]

const content = { 
  className:'sign-in-form', 
  id: 'clientSignInForm', 
  title: 'User'
}

const signInForm = new FormHTML(content) 
signInForm.inputList = inputList

export { signInForm }
