import { defaultAccounts } from './defaultStorage.js'

const setStoredAccounts = list => {
  list = JSON.stringify(list)
  localStorage.accounts = list
}

const getStoredAccounts = () => {
  if (!localStorage.accounts)
    localStorage.accounts = JSON.stringify(defaultAccounts)

  return JSON.parse(localStorage.accounts)
}

const setLoggedAccount = user => {
  user = JSON.stringify(user)
  localStorage.loggedAccount = user
}

const getLoggedAccount = () => {
  if (!localStorage.loggedAccount)
    localStorage.loggedAccount = '[]'
      
  return JSON.parse(localStorage.loggedAccount)
}

const isLoggedIn = !Array.isArray(getLoggedAccount())

export { 
  isLoggedIn,
  getLoggedAccount, setLoggedAccount,
  getStoredAccounts, setStoredAccounts
}
