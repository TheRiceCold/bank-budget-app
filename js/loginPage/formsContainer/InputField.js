import MyHTML from '../../utils/MyHTML.js'

const validateIcons = `
  <i class="fas fa-check-circle"></i>
  <i class="fas fa-exclamation-circle"></i>
  <small>Error Message</small>`

class InputField extends MyHTML {
  constructor(data) {
    super({ className: 'input-field' })
    const { id, placeHolder, icon, type } = data
    
    this.html.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <input type="${type}" placeholder="${placeHolder}" id="${id}"/>
      ${validateIcons}`
  }
}

export default InputField
