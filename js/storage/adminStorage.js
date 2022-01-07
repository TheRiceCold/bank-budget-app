const adminList = [
  {
    username: 'dalewaltergh',
    password: 'dGVzdDEyMzQ=',
    history: []
  }
]

const getStoredAdmins = () => {
  if (!localStorage.admins)
    localStorage.admins = JSON.stringify(adminList)

  return JSON.parse(localStorage.admins)
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

const logoutAdmin = () => {
  location.reload()
  localStorage.loggedAdmin = '[]'
}

const isAdminLoggedIn = !Array.isArray(getLoggedAdmin())

export { 
  logoutAdmin,
  setLoggedAdmin, 
  getLoggedAdmin,
  getStoredAdmins, 
  isAdminLoggedIn
}
