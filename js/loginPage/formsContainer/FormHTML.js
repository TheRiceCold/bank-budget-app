import InputHTML from './InputHTML.js'
import MyHTML from '../../utils/MyHTML.js'

class FormHTML extends MyHTML {
  constructor(className, id, title) {
    super({ tag: 'form', className: className, id: id })
    this.title = title
  }

  setInputList(inputList = []) {
    const inputs = inputList.map(data => new InputHTML(data).asString()).join('')
    
    return this.html.innerHTML = 
      `<h2 class="title">${this.title}</h2>
      ${ inputs }
      <input type="submit" value="login" class="btn solid"/>`
  }
}

export default FormHTML
