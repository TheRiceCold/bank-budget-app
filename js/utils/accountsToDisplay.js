export const accountsToDisplay = list => {
  const accounts = list.map(account => {
    const cloneAccount = Object.assign({}, account)

    delete cloneAccount.password
    delete cloneAccount.mobile
    delete cloneAccount.history
    delete cloneAccount.plans
    
    return cloneAccount
  })

  return accounts
}
