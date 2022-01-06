import FormHTML from '../../../home/html/FormHTML.js'

const inputList = [
  {
    id: 'fullname',
    name: 'fullname',
    placeholder: 'Fullname',
    icon: 'fas fa-user'
  },
  {
    id: 'email',
    name: 'email',
    placeholder: 'Email',
    icon: 'fas fa-envelope'
  },
  {
    id: 'mobile',
    name: 'mobile',
    placeholder: 'Mobile No.',
    icon: 'fas fa-phone'
  },
  {
    id: 'password',
    name: 'password',
    placeholder: 'Password',
    icon: 'fas fa-lock',
    type: 'password'
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    icon: 'fas fa-lock',
    type: 'password'
  },
  {
    id: 'balance',
    name: 'balance',
    placeholder: 'Balance',
    icon: 'fas fa-coins',
  }
]

const content = {
  className: 'addAccount',
  id: 'addAccount'
}

const newAccountForm = new FormHTML(content)
newAccountForm.inputList = inputList

export { newAccountForm }
