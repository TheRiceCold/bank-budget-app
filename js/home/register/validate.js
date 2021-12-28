const setMessage = (input, message, type) => {
  const inputContainer = input.parentElement
  const small = inputContainer.querySelector('small')
  small.textContent = message
  inputContainer.className = 'input-field '+type
}

const getValidValue = (input, regex) => {
  const value = input.value

  if (value.trim() === '')
    setMessage(input, 'This field cannot be blank', 'error')
  else if (regex) {
    if (!regex.test(value))
      setMessage(input, 'regex', 'warning')
    else {
      setMessage(input, '', 'success')
      return value
    }
  }
  else {
    setMessage(input, '', 'success')
    return value
  } 
} 

export { getValidValue }
