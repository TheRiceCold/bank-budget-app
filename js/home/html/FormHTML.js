import MyHTML from '../../utils/MyHTML.js'
import InputHTML from './InputHTML.js'

class FormHTML extends MyHTML {
  constructor(options) {
    const { className, id, title } = options
    super({ tag: 'form', className: className, id: id })
    this.title = title
  }

  set inputList(inputList = []) {
    const inputs = inputList.map(data => 
        new InputHTML(data).string).join(' ')
    
    this.html.innerHTML = 
      `<h2 class="title">${this.title}</h2> ${inputs}
      <input type="submit" value="${this.title}" class="btn solid"/>`
  }
}

export default FormHTML
