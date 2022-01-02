import MyHTML from '../../utils/MyHTML.js'

class CardHTML extends MyHTML {
  constructor(card) {
    super({ className: 'card', id: card.id })
    this.setContent(card)
  }

  setContent(card) {
    const inner =
      `<i class="${card.icon}"></i>
      <h3>${card.title}</h3><h1 id="total">0</h1>
      <small class="text-muted">description</small>`
    this.html.innerHTML = inner
  }
}

export default CardHTML
