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

const logoutAccount = () => {
  location.reload()
  localStorage.loggedAccount = '[]'
}

const updateAccountInStorage = updatedAccount => {
  const accountList = [...getStoredAccounts()]

  const updatedList = accountList.map(account => {
    if (account.email === updatedAccount.email) 
      account = updatedAccount
    
    return account
  })

  setStoredAccounts(updatedList)
}

const getAccountByEmail = email => {
  let found = false
  const accountList = getStoredAccounts()
  found = accountList.find(account => {
    if (account.email === email)
      return account
  })
  return found
}

const isAccountLoggedIn = !Array.isArray(getLoggedAccount())

export { 
  logoutAccount,
  setLoggedAccount,
  getLoggedAccount,
  setStoredAccounts, 
  getStoredAccounts,
  isAccountLoggedIn,
  getAccountByEmail,
  updateAccountInStorage
}
