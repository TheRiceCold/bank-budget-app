const adminList = [
  {
    username: 'dalewaltergh',
    password: 'dGVzdDEyMzQ=',
    history: [],
    reminders: []
  }
]

const setStoredAdmins = list => {
  list = JSON.stringify(list)
  localStorage.admins = list
}

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

const updateAdminInStorage = updatedAdmin => {
  const adminList = [...getStoredAdmins()]

  const updateList = adminList.map(admin => {
    if (admin.username === updatedAdmin.username)
      admin = updatedAdmin
    
    return admin
  })

  setStoredAdmins(updateList)
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
  isAdminLoggedIn,
  updateAdminInStorage
}
