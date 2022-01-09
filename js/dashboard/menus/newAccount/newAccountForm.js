import FormHTML from '../../html/FormHTML.js'

const inputList = [
  {
    id: 'fullname',
    name: 'fullname',
    placeholder: 'Fullname',
    icon: 'fas fa-user',
    validateIcons: true
  },
  {
    id: 'email',
    name: 'email',
    placeholder: 'Email',
    icon: 'fas fa-envelope',
    validateIcons: true
  },
  {
    id: 'mobile',
    name: 'mobile',
    placeholder: 'Mobile No.',
    icon: 'fas fa-phone',
    validateIcons: true
  },
  {
    id: 'password',
    name: 'password',
    placeholder: 'Password',
    icon: 'fas fa-lock',
    type: 'password',
    validateIcons: true
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    icon: 'fas fa-lock',
    type: 'password',
    validateIcons: true
  },
  {
    id: 'balance',
    name: 'balance',
    placeholder: 'Balance',
    icon: 'fas fa-coins',
    validateIcons: true
  }
]

const content = {
  className: 'addAccount',
  id: 'addAccount',
  title: 'Enter Credentials',
  btnLabel: 'Add Account'
}

const newAccountForm = new FormHTML(content)
newAccountForm.inputList = inputList

export { newAccountForm }
