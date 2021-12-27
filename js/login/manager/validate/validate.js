const setErrorFor = (input, message) => {
  const inputContainer = input.parentElement
  const small = inputContainer.querySelector('small')

  small.textContent = message
  inputContainer.className = 'input-field error'
}

const setSuccessFor = input => {
  const inputContainer = input.parentElement
  inputContainer.className = 'input-field success'
}

const checkInput = (input, errCondition, errMessage) => {
  if (errCondition)
    setErrorFor(input, errMessage)
  else 
    setSuccessFor(input)
}

const isEmail = email => 
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

export { checkInput, isEmail }
