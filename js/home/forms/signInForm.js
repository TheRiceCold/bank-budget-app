import FormHTML from '../html/FormHTML.js'

const inputList = [
  {
    id: 'email',
    placeHolder: 'Email', 
    icon: 'fas fa-user'
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
  id: 'signInForm', 
  title: 'Sign In' 
}

const signInForm = new FormHTML(content) 
signInForm.inputList = inputList

export { signInForm }
