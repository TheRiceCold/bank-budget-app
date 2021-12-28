import MyHTML from '../../utils/MyHTML.js'

const validateIcons = `
  <i class="fas fa-check-circle"></i>
  <i class="fas fa-exclamation-circle"></i>
  <small>Error Message</small>`

class InputHTML extends MyHTML {
  constructor(data) {
    super({ className: 'input-field' })
    const { id, name, placeHolder, icon, type } = data

    this.type = !type ? 'text' : type
    
    const eye = type === 'password' 
      ? '<i class="fas fa-eye" id="eye"></i>'
      : ''

    this.html.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <input type="${this.type}" name="${name}" placeholder="${placeHolder}" id="${id}"/>
      ${eye} ${ validateIcons }`
  }
}

export default InputHTML
