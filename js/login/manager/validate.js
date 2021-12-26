const setErrorFor = (input, message) => {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.textContent = message
  formControl.className = 'sign-up-form error'
}

const setSuccessFor = input => {
  const formControl = input.parentElement
  formControl.className = 'sign-up-form success'
}

export const validate = (input, errCondition, errMessage) => {
  if (errCondition)
    setErrorFor(input, errMessage)
  else 
    setSuccessFor(input)
}

export const isEmail = email => 
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
