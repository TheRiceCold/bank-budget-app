import { getAdmins } from '../../storage/admins.js'

const findAdmin = form => {
  const users = getAdmins()

  const username = form.username.value
  const password = form.password.value

  const foundUser = users.find(user => {
    const decryptPassword = atob(user.password)

    const foundUsername = user.username === username
    const foundPassword = decryptPassword === password
    const foundUser = foundUsername && foundPassword

    if (foundUser) return user
  })

  return foundUser
}

export { findAdmin }
