import { getStoredUsers } from '../../storage/control.js'

const findClient = form => {
  const users = getStoredUsers()

  const email = form.email.value
  const password = form.password.value

  const foundUser = users.find(user => {
    const decryptPassword = atob(user.password)

    const foundEmail = email === user.email
    const foundPassword = password === decryptPassword
    const foundUser = foundEmail && foundPassword

    if (foundUser) return user
  })

  return foundUser
}

export { findClient }
