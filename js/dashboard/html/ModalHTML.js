import MyHTML from '../../utils/MyHTML.js'

class ModalHTML extends MyHTML {
  constructor(options) {
    super({ className: 'modal', id: options.id })
    this.setContent(options)
  }

  setContent(options) {
    const inner =
      `<h2 id="transactionType"></h2>
      <input type="text" id="senderId" placeholder="Account ID"/>
      <input type="text" id="receiverId" placeholder="Receiver\'s ID"/>
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
