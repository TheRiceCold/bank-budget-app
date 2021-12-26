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
