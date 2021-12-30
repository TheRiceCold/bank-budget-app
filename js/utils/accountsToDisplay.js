const accountsToDisplay = list => {
  const accounts = list.map(account => {
    const cloneAccount = Object.assign({}, account)

    delete cloneAccount.password
    delete cloneAccount.mobile
    delete cloneAccount.expenses
    delete cloneAccount.withdraws
    delete cloneAccount.history
    
    return cloneAccount
  })

  return accounts
}

export { accountsToDisplay }
