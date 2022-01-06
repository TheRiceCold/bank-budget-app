import { defaultAccounts } from './defaultAccounts.js'

const setStoredAccounts = list => {
  list = JSON.stringify(list)
  localStorage.accounts = list
}

const getStoredAccounts = () => {
  if (!localStorage.accounts)
    localStorage.accounts = JSON.stringify(defaultAccounts)

  return JSON.parse(localStorage.accounts)
}

const setLoggedAccount = account => {
  account = JSON.stringify(account)
  localStorage.loggedAccount = account
}

const getLoggedAccount = () => {
  if (!localStorage.loggedAccount)
    localStorage.loggedAccount = '[]'

  return JSON.parse(localStorage.loggedAccount)
}

const isAccountLoggedIn = !Array.isArray(getLoggedAccount())

const updateAccountInStorage = newAccount => {
  const accountList = [...getStoredAccounts()]

  const updateList = accountList.map(account => {
    if (account.email === newAccount.email) 
      account = newAccount
    
    return account
  })

  setStoredAccounts(updatedList)
}

export { 
  isAccountLoggedIn,
  updateAccountInStorage,
  setStoredAccounts, getStoredAccounts
}
