import MyHTML from '../../utils/MyHTML.js'

const validateIcons = `
  <i class="fas fa-check-circle"></i>
  <i class="fas fa-exclamation-circle"></i>
  <small>Error Message</small>`

class InputHTML extends MyHTML {
  constructor(data) {
    super({ className: 'input-field' })
    const { id, placeHolder, icon, type } = data

    this.type = !type ? 'text' : type

    this.html.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <input type="${this.type}" placeholder="${placeHolder}" id="${id}"/>
      ${ validateIcons }`
  }
}

export default InputHTML
