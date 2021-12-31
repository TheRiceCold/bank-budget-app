import { getStoredAccounts } from '../../utils/storage.js'

const getAccount = form => {
  const accounts = getStoredAccounts()

  const email = form.emailOrPhone
  const password = form.password 

  const found = accounts.find(account => {
    const decryptPassword = atob(account.password)

    const findEmail = account.email === email.value
    const findPassword = decryptPassword === password.value

    if (findEmail && findPassword) return account
      //localStorage.loggedAccount = JSON.stringify(account)
  })

  return found
}

export { getAccount }
