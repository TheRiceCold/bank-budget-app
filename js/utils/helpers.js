import * as DOM from './dom.js'

const removeAllChild = parent => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const toggleCallback = e => {
  const icon = e.target
  const input = icon.parentElement.querySelector('input')

  if (icon.classList.contains('fa-eye')) {
    input.setAttribute('type', 'text')
    DOM.changeClass(icon, 'fa-eye', 'fa-eye-slash')
  } else {
    input.setAttribute('type', 'password')
    DOM.changeClass(icon, 'fa-eye-slash', 'fa-eye')
  }
}

const togglePassword = () => {
  const eyeIcons = DOM.getAll('input[type="password"] + #eye')
  eyeIcons.forEach(icon => icon.onclick = toggleCallback)
}

export { 
  togglePassword,
  removeAllChild
}
