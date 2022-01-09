import MyHTML from '../../utils/MyHTML.js'
import InputHTML from './InputHTML.js'

class FormHTML extends MyHTML {
  constructor(options) {
    const { className, id, title, btnLabel } = options
    super({ tag: 'form', className: className, id: id })
    this.title = title ? title : ''
    this.btnLabel = btnLabel
  }

  set inputList(inputList = []) {
    const inputs = inputList.map(data => 
        new InputHTML(data).string).join(' ')
    
    this.html.innerHTML = 
      `<h2 class="title">${this.title}</h2> ${inputs}
      <input type="submit" value="${this.btnLabel}" class="btn solid"/>`
  }
}

export default FormHTML
