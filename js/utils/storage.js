import { defaultAccounts } from './defaultStorage.js'

export const getStoredAccounts = () => {
  if (!localStorage.accounts)
    localStorage.accounts = JSON.stringify(defaultAccounts)

  return JSON.parse(localStorage.accounts)
}

if (!localStorage.loggedAccount)
  localStorage.loggedAccount = '[]'

export let loggedAccount = JSON.parse(localStorage.loggedAccount)

export const isLoggedIn = !Array.isArray(loggedAccount)
