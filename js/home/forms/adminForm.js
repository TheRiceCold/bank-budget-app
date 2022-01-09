import FormHTML from '../../dashboard/html/FormHTML.js'

const inputList = [
  {
    id: 'username',
    placeholder: 'Username', 
    icon: 'fas fa-user'
  },
  {
    id: 'password',
    placeholder: 'Password',
    icon: 'fas fa-lock',
    type: 'password'
  }
]

const content = {
  className: 'admin-form',
  id: 'adminForm',
  title: 'Admin',
  btnLabel: 'Sign in'
}

const adminForm = new FormHTML(content)
adminForm.inputList = inputList
export { adminForm }
