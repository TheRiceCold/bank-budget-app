const adminUsers = [
  {
    username: 'dalewaltergh',
    password: 'dGVzdDEyMzQ=',
    history: []
  }
]

const getStoredUsers = () => {
  if (!localStorage.users)
    localStorage.users = JSON.stringify(adminUsers)

  return JSON.parse(localStorage.users)
}

const setLoggedUser = user => {
  user = JSON.stringify(user)
  localStorage.loggedUser = user
}

const getLoggedUser = () => {
  if (!localStorage.loggedUser)
    localStorage.loggedUser = '[]'
      
  return JSON.parse(localStorage.loggedUser)
}

const isUserLoggedIn = !Array.isArray(getLoggedUser())

export { getStoredUsers, setLoggedUser, getLoggedUser, isUserLoggedIn }
