const adminUsers = [
  {
    username: 'dalewaltergh',
    password: 'dGVzdDEyMzQ=',
    history: []
  }
]

const getStoredAdmins = () => {
  if (!localStorage.users)
    localStorage.users = JSON.stringify(adminUsers)

  return JSON.parse(localStorage.users)
}

const setLoggedAdmin = admin => {
  admin = JSON.stringify(admin)
  localStorage.loggedAdmin = admin
}

const getLoggedAdmin = () => {
  if (!localStorage.loggedAdmin)
    localStorage.loggedAdmin = '[]'
      
  return JSON.parse(localStorage.loggedAdmin)
}

const isAdminLoggedIn = !Array.isArray(getLoggedAdmin())

export { 
  getStoredAdmins, 
  isAdminLoggedIn,
  setLoggedAdmin, 
  getLoggedAdmin 
}
