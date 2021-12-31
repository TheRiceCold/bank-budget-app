import MyHTML from '../../utils/MyHTML.js'

const content = card => {
  const { title, total } = card

  return new MyHTML({
    className: 'middle',
    inner: `
      <div class="left">
        <h3>${title}</h3>
        <h1>${total}</h1>
      </div>`
  })
}

class CardHTML extends MyHTML {
  constructor(card) {
    const { className, description, icon } = card
    const inner = [
      `<i class="${icon}"></i>`,
      content(card).string,
      `<small class="text-muted">${description}</small>`
    ]
    super({ className: className, inner })
  }
}

export default CardHTML
