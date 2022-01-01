import { defaultAccounts } from './defaultStorage.js'

const getStoredAccounts = () => {
  if (!localStorage.accounts)
    localStorage.accounts = JSON.stringify(defaultAccounts)

  return JSON.parse(localStorage.accounts)
}

if (!localStorage.loggedAccount)
  localStorage.loggedAccount = '[]'

let loggedAccount = JSON.parse(localStorage.loggedAccount)

const isLoggedIn = !Array.isArray(loggedAccount)

export { 
  getStoredAccounts,
  loggedAccount,
  isLoggedIn
}
