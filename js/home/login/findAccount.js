const findAccount = form => {
  const accounts = JSON.parse(localStorage.accounts)

  const email = form.emailOrPhone
  const password = form.password 

  const found = accounts.find(account => {
    const decryptPassword = window.atob(account.password)

    const findEmail = account.email === email.value
    const findPassword = decryptPassword === password.value

    if (findEmail && findPassword)
      localStorage.loggedAccount = JSON.stringify(account)
    
    return findEmail && findPassword
  })

  return found
}

export { findAccount }
