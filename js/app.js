import * as dom from './utils/dom.js'
import LoginPage from './loginPage/LoginPage.js'
import DashboardPage from './dashboardPage/dashboardPage.js'
import { changeMenu } from './dashboardPage/dashboardPage.js'
import { removeAllChildNodes } from './utils/helpers.js'

document.body.append(LoginPage)

onload = () => {
  dom.switchButtons()
  const signUpForm = document.getElementById('signupform')
  const username = document.getElementById('username')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('confirmPassword')

  const signInForm = document.getElementById('signInForm')
  const username1 = document.getElementById('username1')
  const email1 = document.getElementById('email1')
  const password1 = document.getElementById('password1')

  //let usersData = !localStorage.users ? [] : JSON.parse(localStorage.users)

  signUpForm.addEventListener('submit', e => {
    e.preventDefault()

    if (!checkInputs()) return

    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value

    usersData.push({ 
      username: usernameValue, 
      email: emailValue, 
      password: passwordValue 
    })

    signInBtn.click()
    localStorage.users = JSON.stringify(usersData)
    signUpForm.reset()
  })

  signInForm.addEventListener('submit', e => {
    removeAllChildNodes(dom.root)
    dom.root.append(DashboardPage)

    const sidebarMenus = dom.getSidebarMenus()
    sidebarMenus.forEach((item, index) => 
      item.addEventListener('click', e => changeMenu(e, index)))

    e.preventDefault()

    //let userExist = JSON.parse(localStorage.users)
      //.some(user => user.username.toLowerCase() === username1.value && user.password.toLowerCase() === password1.value)

    //if (!userExist)
      //console.log('user does not exist!')
    //else 
      //console.log('welcome!')
  })
}
