import { getValidValue } from './validate.js'

const addAccount = list => {
  const encryptPassword = window.btoa(password.value)
  list.push({
    fullname: fullname.value,
    email: email.value,
    mobile: mobile.value,
    password: encryptPassword,
    balance: 0
  })
  localStorage.accounts = JSON.stringify(list)
}


const registerValidate = (form, list) => {
  var fullname = form.fullname
  var email = form.email
  var mobile = form.mobile
  var password = form.password
  var confirmPassword = form.confirmPassword

  if (getValidValue(fullname)
    && getValidValue(email)
    && getValidValue(mobile)
    && getValidValue(password)
    && getValidValue(confirmPassword) === getValidValue(password)) {
      addAccount(list)
      console.log('Registered!')
  } else 
    console.log('INVALID!')
}

export { registerValidate }
