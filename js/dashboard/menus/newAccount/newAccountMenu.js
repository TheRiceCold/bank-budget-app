import MenuHTML from '../../html/MenuHTML.js'
import FormHTML from '../../../home/html/FormHTML.js'

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
  className: 'addAccount',
  id: 'signUpForm',
  title: 'Sign Up'
}

const signUpForm = new FormHTML(content)
signUpForm.inputList = inputList

class NewAccount extends MenuHTML {
  constructor() {
    const id = 'newAccountMenu'
    const title = 'Create new account'
    const content = signUpForm.string
    super({ id: id, title: title, inner: content })
  }

  manager() {

  }
}

export default NewAccount
