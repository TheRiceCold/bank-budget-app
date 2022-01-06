import FormHTML from '../html/FormHTML.js'

const inputList = [
  {
    id: 'email',
    placeholder: 'Email', 
    icon: 'fas fa-envelope'
  },
  {
    id: 'password',
    placeholder: 'Password',
    icon: 'fas fa-lock',
    type: 'password'
  }
]

const content = { 
  className:'user-form', 
  id: 'userForm', 
  title: 'User' 
}

const userForm = new FormHTML(content) 
userForm.inputList = inputList

export { userForm }
