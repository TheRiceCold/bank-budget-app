import { getValidValue } from './validate.js'

const addAccount = (form, list) => {
  const fullname = form.fullname
  const email = form.email
  const mobile = form.mobile
  const password = form.password
  const confirmPassword = form.confirmPassword

  if (getValidValue(fullname) && 
      getValidValue(email) &&
      getValidValue(mobile) && 
      getValidValue(password) &&
      getValidValue(confirmPassword) === getValidValue(password)) {
        console.log('Registered!')
        list.push({
          fullname: fullname.value,
          email: email.value,
          mobile: mobile.value,
          password: password.value,
          balance: 0
        })
        localStorage.accounts = JSON.stringify(list)
  }
}

export { addAccount }
