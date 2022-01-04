import { defaultUsers } from './defaultStorage.js'

const setStoredUsers = list => {
  list = JSON.stringify(list)
  localStorage.users = list
}

const setLoggedUser = user => {
  user = JSON.stringify(user)
  localStorage.loggedUser = user
}

const getStoredUsers = () => {
  if (!localStorage.users)
    localStorage.users = JSON.stringify(defaultUsers)

  return JSON.parse(localStorage.users)
}

const getLoggedUser = () => {
  if (!localStorage.loggedUser)
    localStorage.loggedUser = '[]'
      
  return JSON.parse(localStorage.loggedUser)
}

const isLoggedIn = !Array.isArray(getLoggedUser())

const updateUserInStorage = newUser => {
  const users = [...getStoredUsers()]

  const updateUsers = users.map(user => {
    if (user.email === newUser.email) 
      user = newUser
    
    return user
  })

  setStoredUsers(updateUsers)
}

export { 
  isLoggedIn,
  updateUserInStorage,
  setLoggedUser, setStoredUsers,
  getLoggedUser, getStoredUsers
}
