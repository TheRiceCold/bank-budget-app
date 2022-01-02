import MyHTML from '../../utils/MyHTML.js'

class InputHTML extends MyHTML {
  constructor(options) {
    super({ className: 'input-field' })
    this.setContent(options)
    this.validateIcons()
  }

  setContent(options) {
    const { 
      id, name, placeHolder, 
      icon, type } = options

    this.type = !type ? 'text' : type

    const eyeIcon = type === 'password' 
      ? '<i class="fas fa-eye" id="eye"></i>' : ''

    this.html.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <input type="${this.type}" name="${name}" placeholder="${placeHolder}" id="${id}"/>${eyeIcon}`
  }

  validateIcons() {
    this.html.innerHTML += `
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error Message</small>`
  }
}

export default InputHTML
