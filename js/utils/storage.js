import { defaultAccounts } from './defaultStorage.js'

const getStoredAccounts = () => {
  if (!localStorage.accounts)
    localStorage.accounts = JSON.stringify(defaultAccounts)

  return JSON.parse(localStorage.accounts)
}

if (!localStorage.loggedAccount)
  localStorage.loggedAccount = '[]'

let loggedAccount = JSON.parse(localStorage.loggedAccount)

let accountName = loggedAccount.fullname
if (!loggedAccount.fullname) accountName = ''

const history = loggedAccount.history

const firstName = accountName.substring(0, accountName.indexOf(' '))
const isLoggedIn = !Array.isArray(loggedAccount)

const balance = loggedAccount.balance

export { getStoredAccounts, loggedAccount, isLoggedIn, firstName, history, balance }
