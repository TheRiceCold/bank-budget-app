import * as DOM from '../../utils/dom.js'

const callback = e => {
  const icon = e.target
  const parent = icon.parentElement
  const input = parent.querySelector('input')

  if (icon.classList.contains('fa-eye')) {
    input.setAttribute('type', 'text')
    DOM.changeClass(icon, 'fa-eye', 'fa-eye-slash')
  } else {
    input.setAttribute('type', 'password')
    DOM.changeClass(icon, 'fa-eye-slash', 'fa-eye')
  }
}

export const togglePassword = () => {
  const icons = DOM.getAll('input[type="password"] + #eye') 
  icons.forEach(icon => icon.onclick = callback)
}
