import MyHTML from '../../utils/MyHTML.js'

class InputHTML extends MyHTML {
  constructor(options) {
    super({ className: 'input-field' })
    this.setContent(options)
    if(options.validateIcons) this.validateIcons()
  }

  setContent(options) {
    const { 
      id, name, placeholder, 
      icon, type } = options

    this.type = !type ? 'text' : type

    const eyeIcon = type === 'password' 
      ? '<i class="fas fa-eye" id="eye"></i>' : ''

    this.html.innerHTML = `
      <i class="${icon}"></i>
      <input type="${this.type}" name="${name}" placeholder="${placeholder}" id="${id}"/>${eyeIcon}`
  }

  validateIcons() {
    this.html.innerHTML += `
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error Message</small>`
  }
}

export default InputHTML
