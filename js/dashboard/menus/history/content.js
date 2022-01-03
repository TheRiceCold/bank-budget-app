import MyHTML from '../../../utils/MyHTML.js'

const cardContent = (card, icon) => {
  const { 
    date, email,
    time, type, amount
  } = card

  const info = type === 'transfer'
    ? `<p>Date: ${date}</p>
      <p>Email: ${email}</p>`
    : `<p>Time: ${time}</p><p>Date: ${date}</p>`

  const content = `
    <div class="card" data-filter="${type}">
      <i class="${icon}"></i>
      <div class="content">
        <h3>${type} ₱${amount}</h3>
        ${info}
      </div>
    </div>`
  return content
}
const cards = new MyHTML({ id: 'cards' }).string

const getButtons = () => {
  const list = ['All', 'Deposit', 'Withdraw', 'Transfer', 'Expense']
  const html = list.map((button, i) => {
    const isActive = (i === 0) ? ' active' : ''
    return `<button class="btn${isActive}">${button}</button>`
  })

  return html
}

const buttons = new MyHTML({
  id: 'buttons',
  inner: getButtons()
}).string


export { buttons, cards, cardContent }
