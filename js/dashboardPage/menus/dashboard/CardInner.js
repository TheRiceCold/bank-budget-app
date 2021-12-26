import MyHTML from '../../../utils/MyHTML.js'

const CardContent = card => {
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

const CardInner = card => {
  const { className, description, icon } = card

  return new MyHTML({
    className: className,
    inner: [
      `<span class="material-icons-sharp">${icon}</span>`,
      CardContent(card).asString(),
      `<small class="text-muted">${description}</small>`
    ]
  })
}

export default CardInner
