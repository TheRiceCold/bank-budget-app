import { setStoredAccounts } from '../../../storage/accountStorage.js'
import { getStoredAccounts } from '../../../storage/accountStorage.js'
import { togglePassword } from '../../../utils/helpers.js'
import { newAccountForm } from './newAccountForm.js'
import MenuHTML from '../../html/MenuHTML.js'
import * as DOM from '../../../utils/dom.js'
import { regexList } from './regexList.js'

class NewAccount extends MenuHTML {
  constructor() {
    const id = 'newAccountMenu'
    const title = 'Create new account'
    const content = newAccountForm.string
    super({ id: id, title: title, inner: content })
  }

  manager() {
    togglePassword()
    this.typingCheck()
    this.submitInput()
  }

  submitInput() {
    const form = DOM.get('#addAccount')
    form.onsubmit = e => this.submitInputCallback(e)
  }
  
  submitInputCallback(e) {
    e.preventDefault()
    const form = e.target 
    const email = form.email
    const mobile = form.mobile
    const fullname = form.fullname
    const password = form.password
    const confirmPassword = form.confirmPassword

    if (this.getValidInput(fullname)
      && this.getValidInput(email)
      && this.getValidInput(mobile)
      && this.getValidInput(password)
      && this.getValidInput(confirmPassword) === this.getValidInput(password)) {
        this.pushAccount(form)
        alert('Account has been added!')
    } 
    else alert('INVALID!')
  }

  typingCheck() {
    const inputs = DOM.getAll('#addAccount input')
    for (let i = 0; i < inputs.length; i++)
      inputs[i].onkeyup = e => this.typingCheckCallback(e, i)
  }

  typingCheckCallback(e, i) {
    const form = DOM.get('#addAccount')
    const inputField = e.target
    const regex = regexList[i].regex
    const message = regexList[i].message

    this.findEmail(form)
    this.confirmPassword(form)
    this.getValidInput(inputField, regex, message)
  }

  findEmail(form) {
    const email = form.email
    const accounts = getStoredAccounts()

    email.onkeyup = () => {
      const checkEmail = accounts.find(account => account.email === email.value)
      this.getValidInput(email, 'condition', 'Email already exist', checkEmail)
    }
  }

  confirmPassword(form) {
    const password = form.password
    const confirmPassword = form.confirmPassword

    confirmPassword.onkeyup = () => {
      const condition = password.value !== confirmPassword.value
      this.getValidInput(confirmPassword, 'condition', 'password does not match', condition)
    }
  }

  getValidInput(input, regex = null, message = '', condition) {
    const value = input.value

    if (value.trim() === '')
      this.setMessage(input, 'This field cannot be blank', 'error')
    else if (regex) {
      if (regex === 'condition') { 
        if (condition) {
          this.setMessage(input, message, 'warning')
        }
        else 
          this.setMessage(input, '', 'success')
      }
      else if (!regex.test(value))
        this.setMessage(input, message, 'warning')
      else {
        this.setMessage(input, '', 'success')
        return value
      }
    }
    else {
      this.setMessage(input, '', 'success')
      return value
    } 
  }

  setMessage(input, message, type) {
    const inputContainer = input.parentElement
    inputContainer.className = 'input-field '+type

    const small = inputContainer.querySelector('small')
    small.textContent = message
  }

  pushAccount(form) {
    const accounts = [...getStoredAccounts()]

    const wordsInName = form.fullname.value.split(" ");
    const fullname = wordsInName.map(word => word[0].toUpperCase() + word.substring(1)).join(" ")

    const id = accounts.length + 1
    const paddId = String(id).padStart(5, '0')
    const email = form.email.value
    const mobile = form.mobile.value
    const initBalance = Number(form.balance.value)

    const encryptPassword = btoa(form.password.value)
    const today = new Date().toLocaleDateString()
    
    const newAccount = {
      id: paddId,
      fullname: fullname,
      email: email,
      mobile: mobile.value,
      password: encryptPassword,
      balance: initBalance,
      budget: 0,
      expenses: [],
      date: today
    }

    accounts.push(newAccount)
    setStoredAccounts(accounts)
  }
 }

export default NewAccount
