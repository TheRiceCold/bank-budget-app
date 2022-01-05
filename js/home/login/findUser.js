import { getStoredUsers } from '../../storage/adminStorage.js'

const getUser = form => {
  const users = getStoredUsers()

  const username = form.username
  const password = form.password 

  const found = users.find(user => {
    const decryptPassword = atob(user.password)

    const foundEmail = user.username === username.value
    const foundPassword = decryptPassword === password.value
    const foundUser = foundEmail && foundPassword

    if (foundUser) return user
  })
  return found
}

export { getUser }
