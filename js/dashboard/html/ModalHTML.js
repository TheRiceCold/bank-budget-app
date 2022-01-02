import MyHTML from '../../utils/MyHTML.js'

class ModalHTML extends MyHTML {
  constructor(options) {
    super({ className: 'modal', id: options.id })
    this.setInner(options)
  }

  setInner(options) {
    const inner =
      `<h2></h2>
      <input type="text" id="receiver" placeholder="Receiver\'s email"/>
      <input type="number" id="amount" placeholder="Amount"/>
      <button class="btn" id="enterBtn">Enter</button>`
    this.html.innerHTML = inner
  }

  get string() {
    const bg = '<div id="modalBg"></div>'
    return this.html.outerHTML + bg
  }
}

export default ModalHTML
