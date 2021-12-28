const setMessage = (input, message, type) => {
  const inputContainer = input.parentElement
  inputContainer.className = 'input-field '+type

  const small = inputContainer.querySelector('small')
  small.textContent = message
}

const getValidValue = (input, regex = null, message = '') => {
  const value = input.value

  if (value.trim() === '')
    setMessage(input, 'This field cannot be blank', 'error')
  else if (regex) {
    if (regex === 'condition') 
      setMessage(input, message, 'warning')
    else if (!regex.test(value))
      setMessage(input, message, 'warning')
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
