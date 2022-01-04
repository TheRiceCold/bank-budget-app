const admins = [
  {
    username: 'dalewaltergh',
    password: 'dGVzdDEyMzQ='
  }
]

const getAdmins = () => {
  let storedAdmins = localStorage.admins
  if (!storedAdmins)
    storedAdmins = JSON.stringify(admins)

  return JSON.parse(storedAdmins)
}

const setLoggedAdmin = admin => {
  admin = JSON.stringify(admin)
  localStorage.loggedAdmin = admin

  delete localStorage.loggedUser
}

export { getAdmins, setLoggedAdmin }
