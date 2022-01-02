import { getStoredAccounts } from '../../utils/storage.js'

const getFindAccount = form => {
  const accounts = getStoredAccounts()

  const email = form.email
  const password = form.password 

  const found = accounts.find(account => {
    const decryptPassword = atob(account.password)

    const foundEmail = account.email === email.value
    const foundPassword = decryptPassword === password.value
    const foundAccount = foundEmail && foundPassword

    if (foundAccount) return account
  })
  return found
}

export { getFindAccount }
