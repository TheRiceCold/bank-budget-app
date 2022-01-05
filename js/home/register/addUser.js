import { getStoredAccounts } from '../../utils/storage.js'
import { setStoredAccounts } from '../../utils/storage.js'
import { getValidInput } from './validInput.js'
import * as DOM from '../../utils/dom.js'

const addUser = form => {
  const users = [...getStoredUsers()]

  const wordsInName = form.fullname.value.split(" ");
  const fullname = wordsInName.map(word => word[0].toUpperCase() + word.substring(1)).join(" ")

  const id = users.length + 1
  const email = form.email.value
  const mobile = form.mobile.value

  const encryptPassword = btoa(form.password.value)
  const today = new Date().toLocaleDateString()
  
  const newUser = {
    id: id,
    fullname: fullname,
    email: email,
    mobile: mobile.value,
    password: encryptPassword,
    balance: 0,
    history: [],
    expenses: [],
    date: today
  }

  users.push(newUser)
  setStoredUsers(users)
  DOM.get('#signInSwitch').click()
}

export { addUser }
