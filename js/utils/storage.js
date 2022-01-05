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
  updateAccountInStorage,
  setStoredAccounts, getStoredAccounts
}
