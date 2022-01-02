import FormHTML from '../html/FormHTML.js'

const inputList = [
  {
    id: 'emailOrPhone',
    placeHolder: 'Email/Phone Number', 
    icon: 'user'
  },
  {
    id: 'password',
    placeHolder: 'Password',
    icon: 'lock',
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
