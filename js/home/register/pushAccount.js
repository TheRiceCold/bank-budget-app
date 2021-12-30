import { getValidValue } from './validate.js'
import * as DOM from '../../utils/dom.js'

const pushAccount = (form, list) => {
  const id = list.length + 1

  const wordsInName = form.fullname.value.split(" ");
  const fullname = wordsInName.map(word => word[0].toUpperCase() + word.substring(1)).join(" ")

  const email = form.email.value
  const mobile = form.mobile.value

  const encryptPassword = window.btoa(form.password.value)
  const today = new Date().toLocaleDateString()

  list.push({
    id: id,
    fullname: fullname,
    email: email,
    mobile: mobile.value,
    password: encryptPassword,
    balance: 0,
    expenses: 0,
    withdraws: 0,
    history: [],
    date: today
  })
  localStorage.accounts = JSON.stringify(list)

  DOM.get('#signInSwitch').click()
}

export { pushAccount }
