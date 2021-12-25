import Main from './Main.js'
import * as dom from './utils/dom.js'
import { changeMenu } from './Main.js'
import LoginPage from './loginPage/LoginPage.js'

document.body.innerHTML = LoginPage.asString()

onload = () => {
  dom.getSidebarMenus().forEach((item, index) => 
    item.addEventListener('click', e => changeMenu(e, index)))

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

  const removeAllChildNodes = parent => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  signInForm.addEventListener('submit', e => {
    removeAllChildNodes(dom.root)
    dom.root.append(Main)

    e.preventDefault()

    //let userExist = JSON.parse(localStorage.users)
      //.some(user => user.username.toLowerCase() === username1.value && user.password.toLowerCase() === password1.value)

    //if (!userExist)
      //console.log('user does not exist!')
    //else 
      //console.log('welcome!')
  })


  function checkInputs() {
    let isValid = false

    if (username.value.trim() === '') 
      setErrorFor(username, 'Username cannot be blank')
    else 
      setSuccessFor(username)

    if (email.value.trim() === '')
      setErrorFor(email, 'Email cannot be blank')
    else if (!isEmail(email.value.trim()))
      setErrorFor(email, 'Email is not valid')
    else 
      setSuccessFor(email)

    if (password.value.trim() === '') 
      setErrorFor(password, 'Password cannot be blank')
    else
      setSuccessFor(password)

    if (confirmPassword.value.trim() === '') 
      setErrorFor(confirmPassword, 'Confirm password cannot be blank')
    else if (confirmPassword.value.trim() !== password.value.trim()) 
      setErrorFor(confirmPassword, 'Passwords does not match')
    else {
      setSuccessFor(confirmPassword)
      isValid = true
    }

    return isValid
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.textContent = message

    formControl.className = 'sign-up-form error'
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'sign-up-form success'
  }

  function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  }
}
