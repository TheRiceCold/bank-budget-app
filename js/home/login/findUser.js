import { getStoredUsers } from '../../utils/storage.js'

const getFindUser = form => {
  const users = getStoredUsers()

  const email = form.email
  const password = form.password 

  const found = users.find(user => {
    const decryptPassword = atob(user.password)

    const foundEmail = user.email === email.value
    const foundPassword = decryptPassword === password.value
    const foundUser = foundEmail && foundPassword

    if (foundUser) return user
  })
  return found
}

export { getFindUser }
