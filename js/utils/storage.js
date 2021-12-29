import { defaultAccounts } from './defaultStorage.js'

if (!localStorage.accounts)
  localStorage.accounts = JSON.stringify(defaultList)

if (!localStorage.loggedAccount)
  localStorage.loggedAccount = '[]'

const storedAccounts = JSON.parse(localStorage.accounts)
const loggedAccount = JSON.parse(localStorage.loggedAccount)
const isLoggedIn = !Array.isArray(loggedAccount)

export { storedAccounts, loggedAccount, isLoggedIn }
